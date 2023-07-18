import { Injectable } from "@nestjs/common";
import { GoodService } from "./good/good.service";
import { Good } from "./good/good.interface";

@Injectable()
export class AppService {
  constructor(private readonly goodService: GoodService) {
  }

  async getGoodsInfo(): Promise<Good[]> {
    return this.goodService.findAll();
  }
}
