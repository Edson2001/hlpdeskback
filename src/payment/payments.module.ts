import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
 
import { PrismaService } from '../prisma.service';
import { PlansService } from 'src/plans/plans.service';
import { PaymentService } from './payment.service';
import { EmailService } from 'src/utils/email.service';

@Module({
  controllers: [PaymentsController],
  providers: [PlansService, PrismaService, PaymentService, EmailService],
})
export class PaymentsModule {}
