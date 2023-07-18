import { Module } from "@nestjs/common";
import { GoodController } from "./good.controller";
import { GoodService } from "./good.service";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [GoodController],
  providers: [GoodService],
  exports: [GoodService],
})
export class GoodModule {}