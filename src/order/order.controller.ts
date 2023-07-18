import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { OrderService } from "./order.service";
import { CreateOrderDto } from "./dto/order.dto";
import { Order } from "./order.interface";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Order')
@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {
  }

  @ApiOperation({
    summary: 'Create new order'
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Post()
  async create(@Body() orderDto: CreateOrderDto) {
    return await this.orderService.create(orderDto);
  }

  @ApiOperation({
    summary: 'Get all orders'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Get()
  async findAll(): Promise<Order[]> {
    return await this.orderService.findAll();
  }

  @ApiOperation({
    summary: 'Find order by id'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.orderService.findById(+id);
  }

  @ApiOperation({
    summary: 'Update user by id'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Put(':id')
  async updateById(@Param('id') id: string, @Body() orderDto: CreateOrderDto) {
    return await this.orderService.update(+id, orderDto);
  }

  @ApiOperation({
    summary: 'Delete order by id'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Delete(':id')
  async removeById(@Param('id') id: string) {
    return await this.orderService.delete(+id);
  }

  @ApiOperation({
    summary: 'Create new order from user cart'
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Post('create/:userId')
  async createOrderFromUsersCart(@Param('id') id: string,) {
    return await this.orderService.createOrderFromUsersCart(+id);
  }
}