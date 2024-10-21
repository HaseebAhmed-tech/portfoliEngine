import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateStatDto {
  @ApiProperty({ required: false, nullable: true })
  @IsInt()
  userId: number | null;

  @ApiProperty({ required: true })
  @IsInt()
  num: number;

  @ApiProperty({ required: true })
  @IsString()
  text: string;
}
