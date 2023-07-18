import { Injectable, NotImplementedException} from "@nestjs/common";
import { User } from './user.interface'
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(user: User) {
    return await this.prisma.user.create({ data: user });
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findById(id: number) {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async delete(id: number) {
    return await this.prisma.user.delete({ where: { id } });
  }

  async update(id: number, user: User) {
    return await this.prisma.good.update({
      where: { id },
      data: user,
    });
  }

  async addNewGoodToCart(id: number, goodId: number) {
    return await this.prisma.cart.create({
      data: {
        userId: id,
        goodId: goodId,
      }
    })
  }
}
