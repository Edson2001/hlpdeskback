import { Controller, Post, Body } from '@nestjs/common';
import { PaymentService } from './payment.service';
 

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('callback')
  handleCallback(@Body() data: any) {
    console.log("chegou aquiiiiiiiiiiiiiiiiiiiiiiiii")
    return this.paymentService.validateCallback(data);
  }

  @Post('generate')
  async generatePayment(@Body() body: { planId: string; customerData: any }) {
    try {
      const { planId, customerData } = body;
      const paymentData = await this.paymentService.generatePayment(
        planId,
        customerData,
      );
      return { status: 'success', data: paymentData };
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  }
}
