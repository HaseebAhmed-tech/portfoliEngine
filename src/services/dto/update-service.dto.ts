import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServiceDto } from './create-service.dto';
import { JsonValue } from '@prisma/client/runtime/library';
import { IsInt, IsArray } from 'class-validator';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
   @ApiProperty({ required: false, nullable:true })
    @IsArray()
    services_list : JsonValue;
  
    @ApiProperty({ required: false, nullable: true })
    @IsInt()
    userId: number | null;
}
