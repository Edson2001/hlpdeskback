import { forwardRef, Module } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { TicketsRepository } from './tickets.repository';
import { PrismaService } from '../prisma.service';
import { UsersModule } from '../users/users.module';
import { EmailModule } from '../utils/email.module';
import { CommentGateway } from 'src/websocket/comment.gateway';
import { TicketsController } from './tickets.controller';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from 'src/auth/auth.module';
import { WebSocketModule } from 'src/websocket/websocket.module';
import { R2Service } from 'src/utils/r2.service';


//export const TICKETS_SERVICE = 'TICKETS_SERVICE';

@Module({
  imports: [
    UsersModule,
    EmailModule,
    forwardRef(() => AuthModule),
    JwtModule.register({
      secret: 'sercreto', //
      signOptions: { expiresIn: '60m' }, // Mesmo tempo de expiração
    }),
    forwardRef(() => WebSocketModule),
  ],
  providers: [TicketsService, PrismaService, TicketsRepository, R2Service],
  exports: [TicketsService, TicketsRepository],
  controllers: [TicketsController],
})
export class TicketsModule {}
