import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ForbiddenException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && user.password === pass) {
      if (!user.enable) {
        throw new ForbiddenException(
          'Utilizador desablitado. Por favor, contacte o administrador.',
        );
      }
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    console.log(payload, "paylod")
    const result = {
      access_token: this.jwtService.sign(payload),
      user,
    };
    console.log(result, "****")
    return result
  }
}
