import { ApiProperty } from '@nestjs/swagger';
import { Service } from '@prisma/client';

export class ServiceEntity implements Service {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: false, nullable: true })
  userId: number;

  @ApiProperty({ required: true })
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string;

  createdAt: Date;
  updatedAt: Date;
}
