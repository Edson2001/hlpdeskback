import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { forwardRef, Inject, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TicketsService } from '../tickets/tickets.service'; // Importe o serviço

@WebSocketGateway({ cors: true })
export class CommentGateway {
  @WebSocketServer()
  server: Server;

  //constructor(private readonly ticketsService: TicketsService) {} // Injetar o serviço
  constructor(
    @Inject(forwardRef(() => TicketsService))
    private readonly ticketsService: TicketsService,
  ) {}
  //@UseGuards(AuthGuard('jwt'))
  @SubscribeMessage('addComment')
  async handleAddComment(
    @MessageBody()
    data: {
      ticketId: string;
      authorId?: string;
      content: string;
      externalName?: string;
      externalEmail?: string;
    },
    @ConnectedSocket() client: Socket,
  ) {
    console.log(data, 'addCommentaddComment');
    // Cadastra o comentário no banco de dados
    const comment = await this.ticketsService.addComment(
      data.ticketId,
      data.content,
      data.authorId,
      data.externalName,
      data.externalEmail,
    );

    // Emite o comentário para todos os clientes
    this.server.emit('newComment', comment);
    return comment;
  }

  @SubscribeMessage('listTickets')
  async handleListTickets(
    @MessageBody() data: { token?: string },
    @ConnectedSocket() client: Socket,
  ) {
    try {
      let tickets;
      if (data.token) {
        // Listar tickets específicos do usuário (se um token for fornecido)
        tickets = await this.ticketsService.findAllByUser(data.token);
      } else {
        // Listar todos os tickets (se nenhum token for fornecido)
        tickets = await this.ticketsService.findAll();
      }
      // Emitir os tickets para o cliente que solicitou
      client.emit('ticketsList', tickets);
    } catch (error) {
      client.emit('error', {
        message: 'Erro ao listar tickets',
        error: error.message,
      });
    }
  }
}
