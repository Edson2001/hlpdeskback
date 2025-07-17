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
  Req,
  UnauthorizedException,
  Query,
} from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreateExternalTicketDto } from './dto/CreateExternalTicketDto.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Post()
  create(@Body() createTicketDto: CreateTicketDto, @Req() req) {
    const authHeader = req.headers.authorization;
    console.log(authHeader, 'authHeaderauthHeaderauthHeader');
    let token: string;

    if (authHeader) {
      const tokenParts = authHeader.split(' ');
      if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        throw new UnauthorizedException('Formato do token inválido');
      }
      token = tokenParts[1];
    } else {
      // Verifica o cookie 'token'
      token = req.cookies?.token;
      if (!token) {
        throw new UnauthorizedException('Token de autenticação não fornecido');
      }
    }
    console.log(token, '*******************');
    return this.ticketsService.create(createTicketDto, token);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  findAll() {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketsService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  update(@Param('id') id: string, @Body() updateTicketDto: CreateTicketDto) {
    return this.ticketsService.update(id, updateTicketDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketsService.remove(id);
  }

  @UseGuards(AuthGuard('jwt'))
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

  @Post('external')
  async createExternalTicket(
    @Body() dto: CreateExternalTicketDto,
    @Query('orgSlug') orgSlug: string,
  ) {
    return this.ticketsService.createExternalTicket(dto, orgSlug);
  }

  @Get('/me/data')
  @UseGuards(AuthGuard('jwt'))
  async getMyTickets(@Req() req) {
    const authHeader = req.headers.authorization;
    console.log(authHeader, 'authHeaderauthHeaderauthHeader');
    let token: string;

    if (authHeader) {
      const tokenParts = authHeader.split(' ');
      if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        throw new UnauthorizedException('Formato do token inválido');
      }
      token = tokenParts[1];
    } else {
      // Verifica o cookie 'token'
      token = req.cookies?.token;
      if (!token) {
        throw new UnauthorizedException('Token de autenticação não fornecido');
      }
    }
    console.log(token, '*******************');

    return this.ticketsService.findAllByUser(token);
  }

  @Get('ticket-by-token/:token')
  async getTicketByToken(@Param('token') token: string) {
    return this.ticketsService.findOneByToken(token);
  }
}
