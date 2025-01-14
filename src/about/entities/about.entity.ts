import { ApiProperty } from "@nestjs/swagger";
import { About } from "@prisma/client";
import { ResumeEntity } from "src/resume/entities/resume.entity";

export class AboutEntity implements About {

    @ApiProperty({required: false, nullable: true})
    name: string | null;

    @ApiProperty({required: false, nullable: true})
    id: number | null;

    @ApiProperty({required: false, nullable: true})
    resumeId: number | null;

    @ApiProperty({required: false, nullable: true})
    experience: string | null;

    @ApiProperty({required: false, nullable: true})
    nationality: string | null;

    @ApiProperty({required: false, nullable: true})
    freelance: string | null;

    @ApiProperty({required: false, nullable: true})
    phone: string | null;

    @ApiProperty({required: false, nullable: true})
    github: string | null;

    @ApiProperty({required: false, nullable: true})
    email: string | null;

    @ApiProperty({required: true})
    languages: string[];

    @ApiProperty()
    resume: ResumeEntity;

    createdAt: Date;
    updatedAt: Date;

    constructor({resume, ...data}: Partial<AboutEntity>)
    {
        Object.assign(this, data)
        if(resume){
            this.resume = new ResumeEntity(resume);
        }
    }

}
