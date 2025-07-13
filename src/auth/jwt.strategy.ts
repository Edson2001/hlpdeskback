import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { cookieExtractor } from 'src/utils/cookieExtractor';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
     // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
     jwtFromRequest: ExtractJwt.fromExtractors([
      ExtractJwt.fromAuthHeaderAsBearerToken(),
      cookieExtractor, // agora aceita dos dois lugares!
    ]),
      ignoreExpiration: false,
      secretOrKey: 'sercreto', // Substitua por uma chave secreta segura
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }

  
}
