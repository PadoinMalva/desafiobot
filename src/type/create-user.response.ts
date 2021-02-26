import { ApiProperty } from "@nestjs/swagger";

export class CreateUserResponse {
  @ApiProperty()
  name: string;

  @ApiProperty()
  surename: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  email: string;
}