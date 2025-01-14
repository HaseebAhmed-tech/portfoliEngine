import { ApiProperty } from '@nestjs/swagger';
import { Skill } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import { ResumeEntity } from 'src/resume/entities/resume.entity';
import { IsArray, IsInt } from 'class-validator';

export class SkillEntity implements Skill {
    @ApiProperty({required: true})
    @IsInt()
    id: number;

    @ApiProperty({required: true})
    @IsInt()
    resumeId: number;

    @ApiProperty({required: false, nullable: true})
    @IsArray()
    skills_list: JsonValue | null;
    
    @ApiProperty()
    resume: ResumeEntity
        
    createdAt: Date;
    updatedAt: Date;
    
    constructor({resume, ...data}: Partial<SkillEntity>){
        Object.assign(this, data)
        if(resume){
          this.resume = new ResumeEntity(resume);
        }
    }
}
