import { ApiProperty } from "@nestjs/swagger";
import { CreateGoodDto } from "../../good/dto/good.dto";

export class CreateUserDto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  email: string;
  @ApiProperty()
  name: string;
}
