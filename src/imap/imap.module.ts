import { Module } from '@nestjs/common';
import { IMapEmailService } from './imap.service';
import { TicketsService } from 'src/tickets/tickets.service';
import { TicketsRepository } from 'src/tickets/tickets.repository';
import { EmailService } from 'src/utils/email.service';
import { TicketsModule } from 'src/tickets/tickets.module';

@Module({
  providers: [IMapEmailService],
  exports: [IMapEmailService],
  imports: [TicketsModule],
})
export class ImapEmailModule {}
