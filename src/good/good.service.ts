import { Injectable, NotImplementedException } from "@nestjs/common";
import { Good } from "./good.interface";
import { PrismaClient } from '@prisma/client'
import { PrismaService } from "../prisma/prisma.service";


@Injectable()
export class GoodService {
  constructor(private prisma: PrismaService) {}

  async create(good: Good) {
    return await this.prisma.good.create({ data: good });
  }

  async findAll(): Promise<Good[]> {
    return await this.prisma.good.findMany();
  }

  async findById(id: number) {
    return await this.prisma.good.findUnique({ where: { id } });
  }

  async delete(id: number) {
    return await this.prisma.good.delete({ where: { id } });
  }

  async update(id: number, good: Good) {
    return await this.prisma.good.update({
      where: { id },
      data: good,
    });
  }
}