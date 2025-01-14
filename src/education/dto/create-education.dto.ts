import { ApiProperty } from "@nestjs/swagger";
import { JsonValue } from "@prisma/client/runtime/library";
import { IsArray } from "class-validator";

export class CreateEducationDto {
    @ApiProperty({required: false, nullable: true})
    @IsArray()
    education_list: JsonValue;

    @ApiProperty({required: true})
    resumeId: number
}
