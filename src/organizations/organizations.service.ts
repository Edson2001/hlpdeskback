import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../utils/email.service';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService, // Injeta o JwtService
    private readonly emailService: EmailService, // Injeta o EmailService
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    // Extrai o slug do email (parte antes do @)
    const slug = createOrganizationDto.email.split('@')[0].toLowerCase();

    // Cria a organização
    const organization = await this.prisma.organization.create({
      data: {
        name: createOrganizationDto.name,
        email: createOrganizationDto.email,
        slug, // Slug gerado do email
        phoneNumber: createOrganizationDto?.phoneNumber,
      },
    });

    // Gera uma senha aleatória segura
    const generateRandomPassword = () => {
      const chars =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
      let password = '';
      for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return password;
    };

    const adminPassword = await bcrypt.hash(generateRandomPassword(), 10);
    const user = await this.prisma.user.create({
      data: {
        name: slug,
        email: createOrganizationDto.email, // Usa o mesmo email da organização
        password: adminPassword,
        role: 'ADMIN',
        organizationId: organization.id,
        enable: false, // Usuário criado desativado
      },
    });

    // Gera o token de confirmação
    const payload = { username: user.name, sub: user.email };
    const token = this.jwtService.sign(payload);
    const confirmationLink = `${process.env.FRONT_URL}/validate/${token}`;

    // Template HTML de e-mail
    const emailHtml = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Ativação de Conta</title>
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
                  <h1>Ativação de Conta</h1>
              </div>
              <div class="content">
                  <h2>Olá, ${user.name}!</h2>
                  <p>Sua conta de administrador foi criada com sucesso. Para ativá-la, clique no botão abaixo:</p>
                  <a href="${confirmationLink}" class="button">Ativar Conta</a>
                  <p>Se você não solicitou esta conta, por favor, ignore este e-mail.</p>
              </div>
              <div class="footer">
                  <p>&copy; 2025 Plataforma. Todos os direitos reservados.</p>
                  <p><a href="http://suaplataforma.com/ajuda">Precisa de ajuda?</a></p>
              </div>
          </div>
      </body>
      </html>
    `;

    // Envia o e-mail de confirmação
    await this.emailService.sendEmail(
      user.email,
      'Ativação de Conta de Administrador',
      emailHtml,
    );

    return organization;
  }

  async findAll() {
    return this.prisma.organization.findMany();
  }

  async findOne(id: string) {
    return this.prisma.organization.findUnique({
      where: { id },
    });
  }
}
