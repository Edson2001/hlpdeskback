import { Role } from "generated/prisma";

 

export class CreateUserDto {
  name: string;
  email: string;
  role: Role; // Use o tipo Role em vez de string
  password: string
}
