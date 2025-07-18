import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import * as Imap from 'node-imap';
import { simpleParser } from 'mailparser';
import { TicketsService } from '../tickets/tickets.service';
import { TicketPriority } from 'src/entities/ticket.entity';

@Injectable()
export class IMapEmailService implements OnModuleInit {
  private readonly logger = new Logger(IMapEmailService.name);
  private imap: Imap;

  constructor(private readonly ticketsService: TicketsService) {}

  onModuleInit() {
    this.startListening();
  }

  private startListening() {
    this.imap = new Imap({
      user: 'geral@redeveloper.ao',
      password: '1!MbzEw6aDcy',
      host: 'imap.hostinger.com',
      port: 993,
      tls: true,
    });

    this.imap.once('ready', () => {
      this.logger.log('✅ IMAP conectado');
      this.imap.openBox('INBOX', false, (err, box) => {
        if (err) {
          this.logger.error('Erro ao abrir caixa de entrada:', err.message);
          return;
        }

        this.logger.log(
          `📬 Caixa "${box.name}" aberta com ${box.messages.total} mensagens`,
        );
        this.imap.on('mail', () => {
          this.checkNewEmails();
        });
      });
    });

    this.imap.once('error', (err) => {
      this.logger.error('❌ Erro IMAP:', err.message);
    });

    this.imap.once('end', () => {
      this.logger.warn(
        '⚠️ Conexão IMAP encerrada. Reconectando em 5 segundos...',
      );
      setTimeout(() => this.startListening(), 5000);
    });

    this.imap.connect();
  }

  private checkNewEmails() {
    this.imap.search(['UNSEEN'], (err, results) => {
      if (err || !results.length) {
        this.logger.debug('Nenhum e-mail novo encontrado');
        return;
      }

      const fetch = this.imap.fetch(results, { bodies: '', markSeen: true });

      fetch.on('message', (msg, seqno) => {
        msg.on('body', (stream) => {
          simpleParser(stream, async (err, parsed) => {
            if (err) {
              this.logger.error('Erro ao parsear e-mail:', err.message);
              return;
            }

            const from = parsed.from?.value[0]?.address || '';
            const name = parsed.from?.value[0]?.name || from;
            const subject = parsed.subject || '';
            const text = parsed.text || '';

            // Verificar se o e-mail é do remetente permitido
            if (from !== 'djiedson413@gmail.com') {
              this.logger.debug(
                `E-mail ignorado: remetente não permitido (${from})`,
              );
              return;
            }

            if (!from.includes('@')) return;

            // Buscar ID do ticket no assunto: ex: [Ticket #1234]
            const ticketIdMatch = subject.match(/\[Ticket\s?#([a-f0-9-]+)]/i);
            let ticket: any = null;

            if (ticketIdMatch) {
              const ticketId = ticketIdMatch[1];
              ticket = await this.ticketsService.findOne(ticketId);
            }
            console.log(subject, 'subbbbbbbbbbbbb');
            console.log(ticketIdMatch, 'ticketIdMatchticketIdMatch');

            /*  if (!ticket) {
              // fallback: buscar o ticket mais recente aberto por e-mail
              ticket = await this.ticketsService.findLatestOpenTicketByEmail(from);
            } */

            if (ticket) {
              await this.ticketsService.addComment(
                ticket.id,
                text,
                undefined,
                name,
                from,
                false,
              );
              this.logger.log(
                `💬 Comentário adicionado ao ticket ${ticket.id}`,
              );
            } else {
              const created = await this.ticketsService.createExternalTicket(
                {
                  title: subject,
                  description: text,
                  email: from,
                  name,
                  priority: TicketPriority.MEDIUM,
                },
                'geral',
                'EMAIL',
              );

              this.logger.log(`🆕 Novo ticket criado: ${created.message}`);

              // Enviar resposta com ID no assunto (opcional: usando seu serviço de email)
              // await this.emailService.send({
              //   to: from,
              //   subject: `[Ticket #${created.id}] Seu pedido foi recebido`,
              //   body: `Recebemos seu e-mail e criamos o ticket ${created.id}. Em breve responderemos.`,
              // });
            }
          });
        });
      });

      fetch.once('error', (err) => {
        this.logger.error('Erro no fetch:', err.message);
      });
    });
  }
}
