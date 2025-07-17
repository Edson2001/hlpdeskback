import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreatePlanDto } from './create-plan.dto';
import { UpdatePlanDto } from './update-plan.dto';
 

@Injectable()
export class PlansService {
  constructor(private prisma: PrismaService) {}

  async create(createPlanDto: CreatePlanDto) {
    return this.prisma.plan.create({ data: createPlanDto });
  }

  async findAll() {
    return this.prisma.plan.findMany();
  }

  async findOne(id: string) {
    return this.prisma.plan.findUnique({ where: { id } });
  }

  async update(id: string, updatePlanDto: UpdatePlanDto) {
    return this.prisma.plan.update({
      where: { id },
      data: updatePlanDto,
    });
  }

  async remove(id: string) {
    return this.prisma.plan.delete({ where: { id } });
  }
}