import { PartialType } from '@nestjs/swagger';
import { CreateSocialDto } from './create-social.dto';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsInt } from 'class-validator';

export class UpdateSocialDto extends PartialType(CreateSocialDto) {
  @ApiProperty({ required: false, nullable: true })
  @IsString()
  @IsOptional()
  linkedin: string;

  @ApiProperty({ required: false, nullable: true })
  @IsString()
  @IsOptional()
  github: string;

  @ApiProperty({ required: false, nullable: true })
  @IsString()
  @IsOptional()
  instagram: string;

  @ApiProperty({ required: false, nullable: true })
  @IsInt()
  @IsOptional()
  userId: number | null;
}
