import { ApiProperty } from '@nestjs/swagger';

export class CreateSalesRequest {
  @ApiProperty()
  cod: number;

  @ApiProperty()
  value: number;

  @ApiProperty()
  date: string;

  @ApiProperty()
  cpf: string;
}
