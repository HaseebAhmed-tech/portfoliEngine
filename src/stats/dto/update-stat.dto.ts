import { PartialType } from '@nestjs/swagger';
import { CreateStatDto } from './create-stat.dto';
import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStatDto extends PartialType(CreateStatDto) {
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
