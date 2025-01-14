import { PartialType } from '@nestjs/swagger';
import { CreateAboutDto } from './create-about.dto';
import { ApiProperty } from "@nestjs/swagger";


export class UpdateAboutDto extends PartialType(CreateAboutDto) {
    
    @ApiProperty({required: false, nullable: true})
    name: string | null;

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

}
