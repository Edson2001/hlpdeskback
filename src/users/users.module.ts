import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersRepository } from './users.repository';
import { EmailModule } from '../utils/email.module';
import { PrismaService } from 'src/prisma.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    EmailModule,
    forwardRef(() => AuthModule),
    JwtModule.register({
      secret: 'sercreto', // Use a mesma chave secreta que no AuthModule
      signOptions: { expiresIn: '60m' }, // Mesmo tempo de expiração
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, PrismaService, UsersRepository],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}
