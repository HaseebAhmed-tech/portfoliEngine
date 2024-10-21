import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateServiceDto } from './create-service.dto';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  @ApiProperty({ required: false, nullable: true })
  description?: string;

  @ApiProperty({ required: true })
  title?: string;

  @ApiProperty({ required: false, nullable: true })
  userId?: number | null;
}
