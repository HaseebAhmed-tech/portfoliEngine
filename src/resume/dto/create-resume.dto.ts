import { ApiProperty } from "@nestjs/swagger";
import { IsInt } from "class-validator";

export class CreateResumeDto {

    @ApiProperty({required: true})
    @IsInt()
    userId: number

}
