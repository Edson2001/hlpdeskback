import { TicketPriority } from "generated/prisma";

 

export class CreateTicketDto {
  title: string;
  description: string;
  priority: TicketPriority; // Use o tipo TicketPriority em vez de string
  status: string;
  createdById: string;
  slaDeadline: Date;
  assignedToId?: string;
  organizationId?: string
}
