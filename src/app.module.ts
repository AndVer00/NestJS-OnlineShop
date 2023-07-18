import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./user/user.module";
import { OrderModule } from "./order/order.module";
import { GoodModule } from "./good/good.module";
import { PrismaModule } from './prisma/prisma.module';
import { HttpModule } from "@nestjs/axios";
import { APP_FILTER } from "@nestjs/core";
import { HttpExceptionFilter } from "./exception.filter";
import { AppGateway } from "./app.gateway";

@Module({
  imports: [UserModule, OrderModule, GoodModule, PrismaModule, HttpModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    AppGateway,
  ],
})
export class AppModule {}
