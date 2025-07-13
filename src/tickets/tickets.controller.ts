import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('tickets')
@UseGuards(AuthGuard('jwt'))
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketsService.create(createTicketDto);
  }

  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: CreateTicketDto) {
    return this.ticketsService.update(id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(id);
  }

  @Patch(':id/assign')
  assignTicket(
    @Param('id') ticketId: string,
    @Body('assignedToId') assignedToId: string,
  ) {
    return this.ticketsService.assignTicket(ticketId, assignedToId);
  }

  @Patch(':id/status')
  updateTicketStatus(
    @Param('id') ticketId: string,
    @Body('status') status: any,
  ) {
    return this.ticketsService.updateTicketStatus(ticketId, status);
  }

  @Post(':id/comments')
  addComment(
    @Param('id') ticketId: string,
    @Body('content') content: string,
    @Body('authorId') authorId: string,
  ) {
    return this.ticketsService.addComment(ticketId, content, authorId);
  }
}
