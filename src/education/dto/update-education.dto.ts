import { PartialType } from '@nestjs/swagger';
import { CreateEducationDto } from './create-education.dto';
import { ApiProperty } from "@nestjs/swagger";
import { JsonValue } from "@prisma/client/runtime/library";

export class UpdateEducationDto extends PartialType(CreateEducationDto) {
    @ApiProperty({required: false, nullable: true})
    education_list: JsonValue;
}
