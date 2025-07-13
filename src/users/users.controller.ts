import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
  Query,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: CreateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }

  @Patch(':id/status')
  async updateUserStatus(
    @Param('id') id: string,
    @Body('enable') enable: boolean,
  ) {
    return this.usersService.updateUserStatus(id, enable);
  }

  @Post('confirm-account')
  async confirmAccount(
    @Query('token') token: string,
    @Body() userPasswords: any,
  ) {
    console.log(token, 'tokentokentokentoken');
    return this.usersService.confirmAccount(
      token,
      userPasswords.password,
      userPasswords?.confirmPassword,
    );
  }

  @Post('request-new-confirmation')
  async requestNewConfirmationCode(@Body('email') email: string) {
    return this.usersService.requestNewConfirmationCode(email);
  }

  @Get('/find/data')
  @UseGuards(AuthGuard('jwt'))
  async getLoggedInUser(@Req() req) {
    // Verifica o header Authorization
    const authHeader = req.headers.authorization;
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

    return this.usersService.getLoggedInUser(token);
  }
}
