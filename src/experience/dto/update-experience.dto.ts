import { PartialType } from '@nestjs/swagger';
import { CreateExperienceDto } from './create-experience.dto';
import { ApiProperty } from "@nestjs/swagger";
import { JsonValue } from "@prisma/client/runtime/library";

export class UpdateExperienceDto extends PartialType(CreateExperienceDto) {
    @ApiProperty({required: false, nullable: true})
    experience_list: JsonValue;
    
}
