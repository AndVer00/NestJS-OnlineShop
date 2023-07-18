import { Controller, Get, Render, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { TimeInterceptor } from "./interceptor";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpService } from "@nestjs/axios";
import { GoodService } from "./good/good.service";

@ApiTags('Pages')
@Controller()
@UseInterceptors(TimeInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Open main page'
  })
  @ApiResponse({
    status: 200,
    description: 'Main page has been successfully loaded.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get()
  @Render('index')
  async getIndexPage() {
    const goods = await this.appService.getGoodsInfo();
    return {
      list: goods,
    };
  }

  @ApiOperation({
    summary: 'Open reviews page'
  })
  @ApiResponse({
    status: 200,
    description: 'Reviews page has been successfully loaded.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/reviews')
  @Render('reviews')
  getReviewsPage() {
  }

  @ApiOperation({
    summary: 'Open page with reviews data'
  })
  @ApiResponse({
    status: 200,
    description: 'Reviews data page has been successfully loaded.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/reviews-all')
  @Render('reviews-all')
  getReviewsAllPage() {
  }

  @ApiOperation({
    summary: 'Open cart page'
  })
  @ApiResponse({
    status: 200,
    description: 'Cart page has been successfully loaded.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/cart')
  @Render('cart')
  getCartPage() {
  }

  @ApiOperation({
    summary: 'Open account page'
  })
  @ApiResponse({
    status: 200,
    description: 'Account page has been successfully loaded.'
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden.'
  })
  @Get('/account')
  @Render('personal_account')
  getAccountPage() {
  }
}
