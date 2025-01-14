import { Resume } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { ExperienceEntity } from "src/experience/entities/experience.entity";

export class ResumeEntity implements Resume {
    constructor(partial: Partial<ResumeEntity>) {
        Object.assign(this, partial);
    }

    @ApiProperty({required: true})
    id: number;

    @ApiProperty({required: true})
    userId: number;

    createdAt: Date;
    updatedAt: Date;

}
