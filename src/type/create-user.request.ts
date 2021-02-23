import { ApiProperty } from "@nestjs/swagger";


export class CreateDealerRequest {

  id: number
  @ApiProperty()
  name: string;

  @ApiProperty()
  surename: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}