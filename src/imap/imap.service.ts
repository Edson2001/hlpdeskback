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
      //user: 'geral@redeveloper.ao',
      user: 'geral@piteu.ao',
      //password: '1!MbzEw6aDcy', // Use senha de app se necessário
      password: 'Aleluia@123',
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

            const from = parsed.from?.text || '';
            const subject = parsed.subject || '';
            const text = parsed.text || '';

            if (from.includes('djiedson413@gmail.com')) {
              this.logger.log(
                `📩 Novo e-mail de ${from} | Assunto: ${subject}`,
              );

              this.ticketsService.createExternalTicket(
                {
                  description: text,
                  email: from,
                  name: from,
                  priority: TicketPriority.MEDIUM,
                  title: subject,
                },
                'geral',
              );
            } else {
              this.logger.debug(`Ignorando e-mail de ${from}`);
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
