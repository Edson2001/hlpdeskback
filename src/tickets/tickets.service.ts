import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { TicketsRepository } from './tickets.repository';
import { getSLADate } from 'src/utils/sla';
import { EmailService } from 'src/utils/email.service';
import { UsersService } from 'src/users/users.service';
import { CommentGateway } from '../websocket/comment.gateway';

@Injectable()
export class TicketsService {
  constructor(
    private readonly ticketsRepository: TicketsRepository,
    private readonly emailService: EmailService,
    private readonly usersService: UsersService,
    //private readonly commentGateway: CommentGateway, // Injetar o CommentGateway
  ) {}

  async create(createTicketDto: CreateTicketDto) {
    const ticketData = {
      title: createTicketDto.title,
      description: createTicketDto.description,
      priority: createTicketDto.priority,
      status: 'OPEN',
      createdById: createTicketDto.createdById,
      slaDeadline: getSLADate(createTicketDto.priority),
    };
    const ticket = await this.ticketsRepository.create(ticketData);

    // Enviar email para o criador do ticket
    const creator = await this.usersService.findOne(
      createTicketDto.createdById,
    );
    if (creator) {
      // Template HTML de confirmação de criação de ticket
      const emailHtml = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket Criado</title>
    <style>
      body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
      .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
      .header { text-align: center; padding: 20px 0; background-color: #007bff; color: #ffffff; border-radius: 8px 8px 0 0; }
      .header h1 { font-size: 24px; margin: 0; }
      .content { padding: 20px; color: #555555; line-height: 1.6; }
      .content h2 { color: #333333; font-size: 20px; margin-bottom: 10px; }
      .content p { margin: 0 0 10px; }
      .ticket-info { background-color: #f1f1f1; padding: 15px; border-radius: 6px; margin-top: 10px; }
      .footer { text-align: center; padding: 20px 0; color: #777777; font-size: 14px; border-top: 1px solid #eeeeee; margin-top: 20px; }
      .footer a { color: #007bff; text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Confirmação de Abertura de Ticket</h1>
      </div>
      <div class="content">
        <h2>Olá, ${creator.name}!</h2>
        <p>O seu ticket foi criado com sucesso na nossa plataforma de suporte. Aqui estão os detalhes:</p>
        <div class="ticket-info">
          <p><strong>Título:</strong> ${ticket.title}</p>
          <p><strong>Prioridade:</strong> ${this.traduzirPrioridade(ticket.priority)}</p>
          <p><strong>Status:</strong> ${this.traduzirStatus(ticket.status)}</p>
          <p><strong>Descrição:</strong><br/> ${ticket.description}</p>
          <p><strong>Prazo de atendimento (SLA):</strong> ${ticket.slaDeadline.toLocaleString('pt-BR')}</p>
        </div>
        <p>Você pode acompanhar o andamento do seu ticket diretamente na plataforma.</p>
      </div>
      <div class="footer">
        <p>&copy; 2025 Plataforma de Suporte. Todos os direitos reservados.</p>
        <p><a href="http://suaplataforma.com/tickets">Ver meus tickets</a></p>
      </div>
    </div>
  </body>
  </html>
`;

      await this.emailService.sendEmail(
        creator.email,
        'Ticket Criado',
        emailHtml,
      );
    }

    // Emitir evento WebSocket para notificar sobre o novo ticket
    //this.commentGateway.server.emit('newTicket', ticket);

    return ticket;
  }

  traduzirPrioridade(priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT'): string {
    switch (priority) {
      case 'LOW':
        return 'Baixa';
      case 'MEDIUM':
        return 'Média';
      case 'HIGH':
        return 'Alta';
      case 'URGENT':
        return 'Urgente';
    }
  }

  traduzirStatus(status: 'OPEN' | 'IN_PROGRESS' | 'CLOSED'): string {
    switch (status) {
      case 'OPEN':
        return 'Aberto';
      case 'IN_PROGRESS':
        return 'Em Andamento';
      case 'CLOSED':
        return 'Fechado';
    }
  }

  findAll() {
    return this.ticketsRepository.findAll({ orderBy: { createdAt: 'desc' } });
  }

  findOne(id: string) {
    return this.ticketsRepository.findOne(id);
  }

  update(id: string, updateTicketDto: CreateTicketDto) {
    return this.ticketsRepository.update(id, updateTicketDto);
  }

  remove(id: string) {
    return this.ticketsRepository.remove(id);
  }

  async assignTicket(ticketId: string, assignedToId: string) {
    const ticket = await this.ticketsRepository.update(ticketId, {
      assignedToId,
    });

    // Enviar email para o usuário atribuído
    const assignedUser = await this.usersService.findOne(assignedToId);
    if (assignedUser) {
      const slaDeadline = ticket.slaDeadline.toLocaleString();
      const emailHtml = `
  <!DOCTYPE html>
  <html lang="pt-BR">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ticket Atribuído</title>
    <style>
      body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
      .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
      .header { text-align: center; padding: 20px 0; background-color: #ffc107; color: #000; border-radius: 8px 8px 0 0; }
      .header h1 { font-size: 24px; margin: 0; }
      .content { padding: 20px; color: #555555; line-height: 1.6; }
      .content h2 { color: #333333; font-size: 20px; margin-bottom: 10px; }
      .content p { margin: 0 0 10px; }
      .ticket-info { background-color: #f1f1f1; padding: 15px; border-radius: 6px; margin-top: 10px; }
      .footer { text-align: center; padding: 20px 0; color: #777777; font-size: 14px; border-top: 1px solid #eeeeee; margin-top: 20px; }
      .footer a { color: #ffc107; text-decoration: none; }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Novo Ticket Atribuído</h1>
      </div>
      <div class="content">
        <h2>Olá, ${assignedUser.name}!</h2>
        <p>Você foi designado para resolver o seguinte ticket:</p>
        <div class="ticket-info">
          <p><strong>ID do Ticket:</strong> #${ticket.id}</p>
          <p><strong>Título:</strong> ${ticket.title}</p>
          <p><strong>Prioridade:</strong> ${this.traduzirPrioridade(ticket.priority)}</p>
          <p><strong>Status:</strong> ${this.traduzirStatus(ticket.status)}</p>
          <p><strong>Descrição:</strong><br/> ${ticket.description}</p>
          <p><strong>Prazo de Atendimento (SLA):</strong> ${ticket.slaDeadline.toLocaleString('pt-BR')}</p>
        </div>
        <p>Por favor, acesse a plataforma para visualizar e iniciar o atendimento deste ticket.</p>
      </div>
      <div class="footer">
        <p>&copy; 2025 Plataforma de Suporte. Todos os direitos reservados.</p>
        <p><a href="http://suaplataforma.com/tickets/${ticket.id}">Ver ticket</a></p>
      </div>
    </div>
  </body>
  </html>
`;

      await this.emailService.sendEmail(
        assignedUser.email,
        'Ticket Atribuído',
        emailHtml,
      );
    }

    return ticket;
  }

  async updateTicketStatus(
    ticketId: string,
    newStatus: 'OPEN' | 'IN_PROGRESS' | 'CLOSED',
  ) {
    const ticket = await this.ticketsRepository.update(ticketId, {
      status: newStatus,
    });

    // Recuperar dados completos do ticket
    const fullTicket = await this.ticketsRepository.findOne(ticketId);

    if (!fullTicket) {
      throw new Error('Ticket não encontrado');
    }

    const statusPt = this.traduzirStatus(fullTicket.status);
    const slaDeadline = fullTicket.slaDeadline.toLocaleString('pt-BR');

    // Notificar criador
    const creator = await this.usersService.findOne(fullTicket.createdById);
    if (creator) {
      /*  const emailHtml = `
            <h2>Olá, ${creator.name}!</h2>
            <p>O status do seu ticket <strong>"${fullTicket.title}"</strong> foi atualizado para <strong>${statusPt}</strong>.</p>
            <p><strong>ID:</strong> #${fullTicket.id}</p>
            <p><strong>Descrição:</strong> ${fullTicket.description}</p>
            <p><strong>Prazo SLA:</strong> ${slaDeadline}</p>
            <p><a href="http://suaplataforma.com/tickets/${fullTicket.id}">Visualizar Ticket</a></p>
        `; */

      const emailHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Status do Ticket Atualizado</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    .header { text-align: center; padding: 20px 0; background-color: #17a2b8; color: #ffffff; border-radius: 8px 8px 0 0; }
    .header h1 { font-size: 24px; margin: 0; }
    .content { padding: 20px; color: #555555; line-height: 1.6; }
    .content h2 { color: #333333; font-size: 20px; margin-bottom: 10px; }
    .content p { margin: 0 0 10px; }
    .ticket-info { background-color: #f1f1f1; padding: 15px; border-radius: 6px; margin-top: 10px; }
    .footer { text-align: center; padding: 20px 0; color: #777777; font-size: 14px; border-top: 1px solid #eeeeee; margin-top: 20px; }
    .footer a { color: #17a2b8; text-decoration: none; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Status do Ticket Atualizado</h1>
    </div>
    <div class="content">
      <h2>Olá, ${creator.name}!</h2>
      <p>O status do ticket <strong>"${ticket.title}"</strong> foi alterado para:</p>
      <p style="font-size: 18px;"><strong>${this.traduzirStatus(ticket.status)}</strong></p>
      <div class="ticket-info">
        <p><strong>ID do Ticket:</strong> #${ticket.id}</p>
        <p><strong>Descrição:</strong> ${ticket.description}</p>
        <p><strong>Prioridade:</strong> ${this.traduzirPrioridade(ticket.priority)}</p>
        <p><strong>Prazo SLA:</strong> ${ticket.slaDeadline.toLocaleString('pt-BR')}</p>
      </div>
      <p>Você pode acompanhar todos os detalhes e responder diretamente pela plataforma.</p>
    </div>
    <div class="footer">
      <p>&copy; 2025 Plataforma de Suporte. Todos os direitos reservados.</p>
      <p><a href="http://suaplataforma.com/tickets/${ticket.id}">Ver Ticket</a></p>
    </div>
  </div>
</body>
</html>
`;

      await this.emailService.sendEmail(
        creator.email,
        'Atualização de Status do Ticket',
        emailHtml,
      );
    }

    // Notificar agente, se houver
    if (fullTicket.assignedToId) {
      const agent = await this.usersService.findOne(fullTicket.assignedToId);
      if (agent) {
        const emailHtml = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Status do Ticket Atualizado</title>
  <style>
    body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
    .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    .header { text-align: center; padding: 20px 0; background-color: #17a2b8; color: #ffffff; border-radius: 8px 8px 0 0; }
    .header h1 { font-size: 24px; margin: 0; }
    .content { padding: 20px; color: #555555; line-height: 1.6; }
    .content h2 { color: #333333; font-size: 20px; margin-bottom: 10px; }
    .content p { margin: 0 0 10px; }
    .ticket-info { background-color: #f1f1f1; padding: 15px; border-radius: 6px; margin-top: 10px; }
    .footer { text-align: center; padding: 20px 0; color: #777777; font-size: 14px; border-top: 1px solid #eeeeee; margin-top: 20px; }
    .footer a { color: #17a2b8; text-decoration: none; }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>Status do Ticket Atualizado</h1>
    </div>
    <div class="content">
      <h2>Olá, ${agent.name}!</h2>
      <p>O status do ticket <strong>"${ticket.title}"</strong> foi alterado para:</p>
      <p style="font-size: 18px;"><strong>${this.traduzirStatus(ticket.status)}</strong></p>
      <div class="ticket-info">
        <p><strong>ID do Ticket:</strong> #${ticket.id}</p>
        <p><strong>Descrição:</strong> ${ticket.description}</p>
        <p><strong>Prioridade:</strong> ${this.traduzirPrioridade(ticket.priority)}</p>
        <p><strong>Prazo SLA:</strong> ${ticket.slaDeadline.toLocaleString('pt-BR')}</p>
      </div>
      <p>Você pode acompanhar todos os detalhes e responder diretamente pela plataforma.</p>
    </div>
    <div class="footer">
      <p>&copy; 2025 Plataforma de Suporte. Todos os direitos reservados.</p>
      <p><a href="http://suaplataforma.com/tickets/${ticket.id}">Ver Ticket</a></p>
    </div>
  </div>
</body>
</html>
`;
        await this.emailService.sendEmail(
          agent.email,
          'Ticket Atualizado',
          emailHtml,
        );
      }
    }

    return ticket;
  }

  async addComment(ticketId: string, content: string, authorId: string) {
    return this.ticketsRepository.addComment(ticketId, content, authorId);
  }
}
