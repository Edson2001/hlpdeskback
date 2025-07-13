import { TicketPriority } from 'src/entities/ticket.entity';

export class CreateExternalTicketDto {
  email: string;
  name: string;
  title: string;
  description: string;
  priority: TicketPriority;
}
