import { Module } from '@nestjs/common';
import { CommentGateway } from './comment.gateway';
import { TicketsModule } from '../tickets/tickets.module'; // Importe o módulo

@Module({
  imports: [TicketsModule], // Adicione esta linha
  providers: [CommentGateway],
})
export class WebSocketModule {}
