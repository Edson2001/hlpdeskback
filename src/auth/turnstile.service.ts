import { Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class TurnstileService {
  private readonly secretKey = process.env.NEXT_PUBLIC_SECRETE_KEY || '';

  async verify(token: string, ip?: string): Promise<void> {
    const params = new URLSearchParams();
    params.append('secret', this.secretKey);
    params.append('response', token);
    if (ip) {
      params.append('remoteip', ip);
    }

    const response = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      params,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    const data = response.data;

    if (!data.success) {
      throw new UnauthorizedException('Falha na verificação do Turnstile');
    }
  }
}
