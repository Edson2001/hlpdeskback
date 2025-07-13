import { Plan, User } from "generated/prisma";


export class Organization {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  users?: User[];
  plans?: Plan[];
}
