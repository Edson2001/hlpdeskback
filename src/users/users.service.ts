import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersRepository } from './users.repository';
import { EmailService } from '../utils/email.service'; // Importe o EmailService
import { NotFoundException } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly emailService: EmailService, // Injete o EmailService
    private readonly jwtService: JwtService, // Injete o JwtService
  ) {}

  async create(createUserDto: any) {

    const payloadUser = this.jwtService.verify(createUserDto?.token); // Decodifica o token
    console.log(payloadUser, 'payload');
    const userAdmin = await this.usersRepository.findOneByEmail(payloadUser.email); // Busca o usuário pelo email (sub)
    if (!userAdmin) {
      throw new NotFoundException('Usuário não encontrado');
    }
    console.log(userAdmin, "userAdmin")
    delete createUserDto?.token
    const user = await this.usersRepository.create({
      ...createUserDto,
      organizationId: userAdmin.organizationId, // Associa o usuário à organização
      // enable: false,
    });

    const payload = { username: createUserDto.name, sub: createUserDto.email };
    const token = this.jwtService.sign(payload);

    const confirmationLink = `http://localhost:3000/validate/${token}`;

    // Template HTML de boas-vindas
    const emailHtml = `
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bem-vindo à Plataforma</title>
            <style>
                body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
                .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
                .header { text-align: center; padding: 20px 0; background-color: #007bff; color: #ffffff; border-radius: 8px 8px 0 0; }
                .header h1 { font-size: 24px; margin: 0; }
                .content { padding: 20px; color: #555555; line-height: 1.6; }
                .content h2 { color: #333333; font-size: 20px; margin-bottom: 10px; }
                .content p { margin: 0 0 10px; }
                .button { display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 16px; color: #ffffff; background-color: #007bff; text-decoration: none; border-radius: 5px; }
                .footer { text-align: center; padding: 20px 0; color: #777777; font-size: 14px; border-top: 1px solid #eeeeee; margin-top: 20px; }
                .footer a { color: #007bff; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="email-container">
                <div class="header">
                    <h1>Bem-vindo à Plataforma!</h1>
                </div>
                <div class="content">
                    <h2>Olá, ${user.name}!</h2>
                    <p>Estamos muito felizes por você ter se juntado à nossa plataforma. Aqui estão os detalhes da sua conta:</p>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Senha:</strong> ${createUserDto.password}</p>
                    <p>Para começar a usar a plataforma, clique no botão abaixo:</p>
                    <a href="${confirmationLink}" class="button">Confirmar Conta</a>
                    <p>Se você tiver alguma dúvida ou precisar de ajuda, não hesite em entrar em contato conosco.</p>
                </div>
                <div class="footer">
                    <p>&copy; 2025 Plataforma. Todos os direitos reservados.</p>
                    <p><a href="http://suaplataforma.com/ajuda">Precisa de ajuda?</a></p>
                </div>
            </div>
        </body>
        </html>
    `;

    await this.emailService.sendEmail(
      user.email,
      'Conta Criada com Sucesso',
      emailHtml,
    );

    return user;
  }

  findAll() {
    return this.usersRepository.findAll();
  }

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  findOneByEmail(email: string) {
    return this.usersRepository.findOneByEmail(email);
  }

  update(id: string, updateUserDto: CreateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async updateUserStatus(id: string, enable: boolean) {
    console.log(enable, 'usersusers');
    return this.usersRepository.update(id, { enable });
  }

  async confirmAccount(
    token: string,
    password: string,
    confirmPassword: string,
  ) {
    try {
      if (password !== confirmPassword) {
        throw new BadRequestException('As senhas não coincidem');
      }

      const payload = this.jwtService.verify(token); // Verifica o token
      // console.log(payload.sub?.email)
      const user = await this.usersRepository.findOneByEmail(payload.sub); // Busca o usuário pelo email (sub)
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }

      if (user.enable) {
        throw new BadRequestException('Conta já ativada');
      }

      return this.usersRepository.updateByEmail(payload.sub, {
        enable: true,
        password,
      });
    } catch (error) {
      console.error('Erro ao verificar o token:', error); // Log do erro para depuração
      throw new BadRequestException('Token inválido ou expirado');
    }
  }

  async requestNewConfirmationCode(email: string) {
    const user = await this.usersRepository.findOneByEmail(email);
    console.log(user, '*********');
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    if (user.enable) {
      throw new BadRequestException('Conta já ativada');
    }

    const payload = { username: user.name, sub: user.email };
    const token = this.jwtService.sign(payload);

    const confirmationLink = `http://localhost:3000/validate/${token}`;

    const emailHtml = `    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Novo Código de Confirmação</title>
        <style>
            body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
            .email-container { max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
            .header { text-align: center; padding: 20px 0; background-color: #007bff; color: #ffffff; border-radius: 8px 8px 0 0; }
            .header h1 { font-size: 24px; margin: 0; }
            .content { padding: 20px; color: #555555; line-height: 1.6; }
            .content h2 { color: #333333; font-size: 20px; margin-bottom: 10px; }
            .content p { margin: 0 0 10px; }
            .button { display: inline-block; padding: 10px 20px; margin: 20px 0; font-size: 16px; color: #ffffff; background-color: #007bff; text-decoration: none; border-radius: 5px; }
            .footer { text-align: center; padding: 20px 0; color: #777777; font-size: 14px; border-top: 1px solid #eeeeee; margin-top: 20px; }
            .footer a { color: #007bff; text-decoration: none; }
        </style>
    </head>
    <body>
        <div class="email-container">
            <div class="header">
                <h1>Novo Código de Confirmação</h1>
            </div>
            <div class="content">
                <h2>Olá, ${user.name}!</h2>
                <p>Você solicitou um novo código de confirmação para ativar sua conta. Clique no botão abaixo para confirmar sua conta:</p>
                <a href="${confirmationLink}" class="button">Confirmar Conta</a>
                <p>Se você não solicitou este código, por favor, ignore este e-mail.</p>
            </div>
            <div class="footer">
                <p>&copy; 2025 Plataforma. Todos os direitos reservados.</p>
                <p><a href="http://suaplataforma.com/ajuda">Precisa de ajuda?</a></p>
            </div>
        </div>
    </body>
    </html>
  `;

    await this.emailService.sendEmail(
      user.email,
      'Novo Código de Confirmação',
      emailHtml,
    );

    return { message: 'Novo código de confirmação enviado com sucesso' };
  }

  async getLoggedInUser(token: string) {
    try {
      const payload = this.jwtService.verify(token); // Decodifica o token
      console.log(payload, 'payload');
      const user = await this.usersRepository.findOneByEmail(payload.email); // Busca o usuário pelo email (sub)
      if (!user) {
        throw new NotFoundException('Usuário não encontrado');
      }
      console.log(user, 'console.logconsole.logconsole.logconsole.log');
      return user;
    } catch (error) {
      console.error('Erro ao verificar o token:', error);
      throw new BadRequestException('Token inválido ou expirado');
    }
  }

  remove(id: string) {
    return this.usersRepository.remove(id);
  }
}
