import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt } from 'class-validator';

export class CreateServiceDto {
  @ApiProperty({ required: true })
  @IsString()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  @IsString()
  description: string;

  @ApiProperty({ required: false, nullable: true })
  @IsInt()
  userId: number | null;
}
