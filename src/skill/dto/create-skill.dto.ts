import { ApiProperty } from "@nestjs/swagger";
import { JsonValue } from "@prisma/client/runtime/library";
import { IsArray } from "class-validator";

export class CreateSkillDto {
    @ApiProperty({required: false, nullable: true})
    @IsArray()
    skills_list: JsonValue;

    @ApiProperty({required: true})
    resumeId: number
}
