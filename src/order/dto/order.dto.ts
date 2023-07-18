import { ApiProperty } from "@nestjs/swagger";
import { CreateGoodDto } from "../../good/dto/good.dto";

export class CreateOrderDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  ownerId: number;
}