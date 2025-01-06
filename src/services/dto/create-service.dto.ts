import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';
import { IsInt, IsJSON } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({ required: false, nullable:true })
  @IsJSON()
  services_list : JsonValue;

  @ApiProperty({ required: false, nullable: true })
  @IsInt()
  userId: number | null;
}
