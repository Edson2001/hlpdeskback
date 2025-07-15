import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TurnstileService } from './turnstile.service';
 

@Injectable()
export class TurnstileMiddleware implements NestMiddleware {
  constructor(private readonly turnstileService: TurnstileService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const { turnstileToken } = req.body;

    if (!turnstileToken) {
      throw new UnauthorizedException('Token do Turnstile não fornecido.');
    }

    await this.turnstileService.verify(turnstileToken, req.ip);
    next();
  }
}
