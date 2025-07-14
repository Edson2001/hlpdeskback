import { Injectable } from '@nestjs/common';

import { CreateTicketDto } from './dto/create-ticket.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TicketsRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTicketDto: CreateTicketDto) {
    return this.prisma.ticket.create({
      data: createTicketDto as any,
    });
  }

  async findAll(params?: any) {
    return this.prisma.ticket.findMany(params);
  }

  async findOne(id: string) {
    return this.prisma.ticket.findUnique({
      where: { id },
      include: {
        comments: {
          include: {
            author: true,
          },
        },
        assignedTo: true,
        createdBy: true,
      },
    });
  }

  async update(id: string, updateTicketDto: Partial<CreateTicketDto>) {
    return this.prisma.ticket.update({
      where: { id },
      data: updateTicketDto as any,
    });
  }

  async remove(id: string) {
    return this.prisma.ticket.delete({
      where: { id },
    });
  }

  async addComment(
    ticketId: string,
    content: string,
    authorId?: string,
    externalName?: string,
    externalEmail?: string,
  ) {
    console.log(content,
      ticketId,
      authorId,
      externalName,
      externalEmail,"===============000")
    return this.prisma.comment.create({
      data: {
        content,
        ticketId,
        authorId,
        externalName,
        externalEmail,
      },
      include: {
        author: true,
      },
    });
  }
}
