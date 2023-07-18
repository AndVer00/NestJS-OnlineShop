import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateUserDto } from "./dto/user.dto";
import { UserService } from "./user.service";
import { User } from "./user.interface";
import { CreateGoodDto } from "../good/dto/good.dto";
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from "@nestjs/swagger";

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({
    summary: 'Create new user'
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Post()
  async create(@Body() userDto: CreateUserDto) {
    return await this.userService.create(userDto);
  }

  @ApiOperation({
    summary: 'Get all users'
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @ApiOperation({
    summary: 'Find user by id'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.userService.findById(+id);
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
  async updateById(@Param('id') id: string, @Body() userDto: CreateUserDto) {
    return await this.userService.update(+id, userDto);
  }

  @ApiOperation({
    summary: 'Delete user by id'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Delete(':id')
  async removeById(@Param('id') id: string) {
    return await this.userService.delete(+id);
  }

  @ApiOperation({
    summary: 'Add new good to users cart'
  })
  @ApiParam({ name: 'userId', type: 'string' })
  @ApiParam({ name: 'goodId', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })

  @Put(':id/:goodId')
  async addNewGoodToCart(@Param('userId') userId: string, @Param('goodId') goodId: string) {
    return await this.userService.addNewGoodToCart(+userId, +goodId);
  }
}