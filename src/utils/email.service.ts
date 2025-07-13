import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com', // Ou outro serviço de email
      auth: {
        user: 'geral@redeveloper.ao', // Substitua pelo seu email
        pass: '1!MbzEw6aDcy', // Substitua pela sua senha
      },
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
    const mailOptions = {
      from: 'geral@redeveloper.ao',
      to,
      subject,
      html, // Use 'html' em vez de 'text'
    };

    return this.transporter.sendMail(mailOptions);
  }
}
