import { Role } from 'generated/prisma';

export class CreateUserDto {
  name: string;
  email: string;
  password: string;
  role?: string; // Opcional, se já existir
  OrganizationId?: string; // Adicionar este campo
}
