import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  IsOptional,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @ApiProperty({ required: true })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty({ required: true })
  password: string;

  @IsString()
  @ApiProperty({ required: false, nullable: true })
  contact: string | null;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  designation: string;
}
