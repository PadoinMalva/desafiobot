import { ApiProperty } from '@nestjs/swagger';

export class EditSalesRequest {
  @ApiProperty()
  value?: number;

  @ApiProperty()
  date?: string;
}
