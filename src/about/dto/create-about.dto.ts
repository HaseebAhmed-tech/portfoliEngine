import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsInt, IsString } from "class-validator";

export class CreateAboutDto {
    @ApiProperty({required: false, nullable: true})
    @IsString()
    name: string | null;

    @ApiProperty({required: false, nullable: true})
    @IsInt()
    resumeId: number | null;

    @ApiProperty({required: false, nullable: true})
    @IsString()
    experience: string | null;

    @ApiProperty({required: false, nullable: true})
    @IsString()
    nationality: string | null;

    @ApiProperty({required: false, nullable: true})
    @IsString()
    freelance: string | null;

    @ApiProperty({required: false, nullable: true})
    @IsString()
    phone: string | null;

    @ApiProperty({required: false, nullable: true})
    @IsString()
    github: string | null;

    @ApiProperty({required: false, nullable: true})
    @IsString()
    email: string | null;

    @ApiProperty({required: true})
    @IsArray()
    languages: string[];

}
