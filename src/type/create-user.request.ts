import { ApiProperty } from "@nestjs/swagger";


export class CreateDealerRequest {
  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  email: string;

  @ApiProperty()x
  password: string;
}