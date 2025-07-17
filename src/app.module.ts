import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { AuthModule } from './auth/auth.module';
import { WebSocketModule } from './websocket/websocket.module';
import { EmailService } from './utils/email.service';
import { PrismaService } from './prisma.service';
import { OrganizationsModule } from './organizations/organizations.module';
import { PlansModule } from './plans/plans.module';
import { PaymentsModule } from './payment/payments.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    WebSocketModule,
    TicketsModule,
    OrganizationsModule,
    PlansModule,
    PaymentsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, EmailService],
})
export class AppModule {}
 