import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

import axios from 'axios';
import * as crypto from 'crypto';

@Injectable()
export class PaymentService {
  constructor(private prisma: PrismaService) {}

  

  async generatePayment(planId: string, customerData: any) {
    const plan = await this.prisma.plan.findUnique({ where: { id: planId } });
    if (!plan) {
      throw new Error('Plano não encontrado');
    }
    const payment = await this.prisma.payment.create({
      data: {
        paymentReference: `PLAN_${planId.substring(0, 10)}_${Date.now().toString().slice(-4)}`,
        organizationId: customerData.organizationId, // Supondo que customerData inclui organizationId
        planId: planId,
        status: 'pending',
      },
    });

    const organization = await this.prisma.organization.findUnique({
      where: { id: customerData.organizationId },
    });
    console.log(
      process.env.IPN_URL || 'http://localhost:3006/payments/callback',
    );

    const parameters = {
      identifier: payment.paymentReference, // Usa a paymentReference como identifier
      currency: 'kz',
      amount: plan.monthlyPrice,
      gateway_methods: ['MulticaixaExpress'],
      details: `Assinatura do plano: ${plan.title}`,
      ipn_url:
        process.env.IPN_URL ||
        'https://0b0a0daa7ea8.ngrok-free.app/payments/callback',
      cancel_url: process.env.FRONT_URL + '/painel/plans',
      success_url: process.env.FRONT_URL + '/painel',
      public_key:
        process.env.PAGAMENTO_AO_PUBLIC_KEY ||
        'test_a7zcl45r1hku5hk1dhmp3m6yak13dbqznucn77xeigvi6tf9uj2',
      site_name: 'RedHelp',
      site_logo: 'https://seusite.com/logo.png',
      checkout_theme: 'light',
      customer: {
        first_name: customerData.name,
        last_name: customerData.name,
        email: customerData.email,
        mobile: '+244' + organization?.phoneNumber,
      },
      shipping_info: {}, // Opcional
      billing_info: {}, // Opcional
    };

    try {
      const response = await axios.post(
        process.env.PAGAMENTO_AO_API_URL ||
          'https://pagamento.ao/test/payment/initiate',
        parameters,
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
      console.log(response?.data, '****');
      return response.data;
    } catch (error) {
      throw new Error('Falha ao gerar pagamento: ' + error.message);
    }
  }

  // ... outros métodos existentes (como generatePayment) ...

  async validateCallback(
    data: any,
  ): Promise<{ status: string; message: string }> {
    console.log('entrou na validação', '***************');
    const { status, signature, identifier, ...rest } = data;
    console.log(data, '##########');

    // Valida a assinatura (código anterior)
    const secret =
      process.env.PAGAMENTO_AO_SECRET_KEY ||
      'test_1yuvu1pg516yltu0cnrwv7agv8r5ypphnbt85gpbg9q13jmh6i2';
    const mySignature = crypto
      .createHmac('sha256', secret as any)
      .update(`${rest.data?.amount}${identifier}`)
      .digest('hex')
      .toUpperCase();

    if (status === 'success' && signature === mySignature) {
      // Busca o pagamento pelo paymentReference (identifier)
      const payment = await this.prisma.payment.findUnique({
        where: { paymentReference: identifier },
        include: { plan: true, organization: true },
      });

      if (!payment) {
        throw new Error('Pagamento não encontrado.');
      }

      // Atualiza o status do pagamento para "completed"
      await this.prisma.payment.update({
        where: { id: payment.id },
        data: { status: 'completed' },
      });

      // Cria a associação OrganizationPlan
      const plan = await this.prisma.plan.findUnique({
        where: { id: payment.planId },
      });

      if (!plan) throw new Error('Plano não encontrado');

      // Calcula expiresAt com base em durationMonths
      const expiresAt = new Date();
      expiresAt.setMonth(expiresAt.getMonth() + plan.durationMonths);

      // 1. Desativa todos os OrganizationPlan ativos da organização
      await this.prisma.organizationPlan.updateMany({
        where: {
          organizationId: payment.organizationId,
          isActive: true, // Apenas desativar os ativos
        },
        data: {
          isActive: false,
        },
      });

      // 2. Cria e ativa o novo OrganizationPlan
      await this.prisma.organizationPlan.create({
        data: {
          organizationId: payment.organizationId,
          planId: payment.planId,
          startDate: new Date(),
          expiresAt: new Date(
            new Date().setMonth(new Date().getMonth() + plan.durationMonths),
          ),
          isActive: true, // Ativa o novo plano
          paymentId: payment.id,
        },
      });

      return {
        status: 'success',
        message: 'Plano ativado e planos anteriores desativados.',
      };
    } else {
      // Atualiza o status para "failed" se a validação falhar
      await this.prisma.payment.updateMany({
        where: { paymentReference: identifier },
        data: { status: 'failed' },
      });
      return { status: 'error', message: 'Assinatura inválida.' };
    }
  }
}
