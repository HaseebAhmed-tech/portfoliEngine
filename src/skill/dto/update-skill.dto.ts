import { PartialType } from '@nestjs/swagger';
import { CreateSkillDto } from './create-skill.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';
import { JsonValue } from '@prisma/client/runtime/library';

export class UpdateSkillDto extends PartialType(CreateSkillDto) {
    @ApiProperty({required: false, nullable: true})
    @IsArray()
    skill_list: JsonValue;
}
