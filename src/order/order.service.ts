import { Injectable, NotImplementedException } from "@nestjs/common";
import { Order } from "./order.interface";
import { PrismaService } from "../prisma/prisma.service";
import { CreateOrderDto } from "./dto/order.dto";

@Injectable()
export class OrderService {
  constructor(private prisma: PrismaService) {}

  async create(order: Order) {
    return await this.prisma.order.create({ data: order });
  }

  async findAll(): Promise<Order[]> {
    return await this.prisma.order.findMany();
  }

  async findById(id: number) {
    return await this.prisma.order.findUnique({ where: { id } });
  }

  async delete(id: number) {
    return await this.prisma.order.delete({ where: { id } });
  }

  async update(id: number, order: Order) {
    return await this.prisma.order.update({
      where: { id },
      data: order,
    });
  }

  async createOrderFromUsersCart(id: number) {
    let newOrder = new CreateOrderDto();
    newOrder.ownerId = id;
    newOrder = await this.prisma.order.create({ data: newOrder });

    const getCart = await this.prisma.cart.findMany({ where: { userId: id } });
    getCart.forEach(good => {
      this.prisma.goodsInOrders.create({
          data: {
            goodId: good.goodId,
            orderId: newOrder.id
          }
      })
    })
  }
}

