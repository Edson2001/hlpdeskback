import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TicketsModule } from './tickets/tickets.module';
import { AuthModule } from './auth/auth.module';
import { WebSocketModule } from './websocket/websocket.module';
import { EmailService } from './utils/email.service';
import { PrismaService } from './prisma.service';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    WebSocketModule,
    TicketsModule,
    OrganizationsModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService, EmailService],
})
export class AppModule {}

/* import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

socket.on('connect', () => {
  console.log('Connected to WebSocket server');
});

socket.on('newComment', (comment) => {
  console.log('New comment:', comment);
  // Atualize a interface do usuário com o novo comentário
});

function addComment(ticketId, content, authorId) {
  socket.emit('addComment', { ticketId, content, authorId });
} */
