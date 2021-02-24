import { ApiProperty } from "@nestjs/swagger";
import { StatusEnum } from "src/sales/enum/sales-status.enum";


export class CreateSalesRequest {

  @ApiProperty()
  cod: number;

  @ApiProperty()
  value: number;

  @ApiProperty()
  date: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  status: StatusEnum;
}