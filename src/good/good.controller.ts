import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateGoodDto } from "./dto/good.dto";
import { Good } from "./good.interface";
import { GoodService } from "./good.service";
import { ApiOperation, ApiParam, ApiResponse, ApiTags, ApiBody } from "@nestjs/swagger";

@ApiTags('Good')
@Controller('good')
export class GoodController {
  constructor(private goodService: GoodService) {
  }

  @ApiOperation({
    summary: 'Create new good'
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Post()
  async create(@Body() goodDto: CreateGoodDto) {
    return await this.goodService.create(goodDto);
  }

  @ApiOperation({
    summary: 'Get all goods'
  })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Get()
  async findAll(): Promise<Good[]> {
    return await this.goodService.findAll();
  }

  @ApiOperation({
    summary: 'Find good by id'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Get(':id')
  async findById(@Param('id') id: string) {
    return await this.goodService.findById(+id);
  }

  @ApiOperation({
    summary: 'Update good by id'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Put(':id')
  async updateById(@Param('id') id: string, @Body() goodDto: CreateGoodDto) {
    return await this.goodService.update(+id, goodDto);
  }

  @ApiOperation({
    summary: 'Delete good by id'
  })
  @ApiParam({ name: 'id', type: 'string' })
  @ApiResponse({
    status: 501,
    description: 'Not implemented.'
  })
  @Delete(':id')
  removeById(@Param('id') id: string) {
    return this.goodService.delete(+id);
  }
}