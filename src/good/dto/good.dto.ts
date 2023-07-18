import { ApiProperty } from "@nestjs/swagger";

export class CreateGoodDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  price: number;
  @ApiProperty()
  description: string;
}