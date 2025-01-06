import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { JsonValue } from '@prisma/client/runtime/library';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty({ required: false, nullable: true })
  contact: string | null;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: true })
  designation: string;

  @ApiProperty({required: false})
  stats?: JsonValue;
}
