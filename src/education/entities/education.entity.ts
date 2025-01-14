import { Education } from "@prisma/client";
import { JsonValue } from "@prisma/client/runtime/library";
import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt } from 'class-validator';
import { ResumeEntity } from 'src/resume/entities/resume.entity';

export class EducationEntity implements Education {

    @ApiProperty({required: true})
    @IsInt()
    id: number;

    @ApiProperty({required: true})
    @IsInt()
    resumeId: number;

    @ApiProperty({required: false, nullable: true})
    @IsArray()
    education_list: JsonValue;

    @ApiProperty()
    resume: ResumeEntity

    createdAt: Date;
    updatedAt: Date;

    constructor({resume, ...data}: Partial<EducationEntity>){
        Object.assign(this, data)
        if(resume){
          this.resume = new ResumeEntity(resume);
        }
    }
}
