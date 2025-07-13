import { forwardRef, Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { PrismaService } from '../prisma.service';
import { AuthModule } from 'src/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { EmailService } from 'src/utils/email.service';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService, PrismaService, EmailService],
  imports: [
    forwardRef(() => AuthModule),
    JwtModule.register({
      secret: 'sercreto', // 
      signOptions: { expiresIn: '60m' }, // Mesmo tempo de expiração
    }),
  ]
})
export class OrganizationsModule {}
