import { ApiProperty } from '@nestjs/swagger';
import { Service } from '@prisma/client';
import { JsonValue } from '@prisma/client/runtime/library';
import { UserEntity } from 'src/users/entities/user.entity';

export class ServiceEntity implements Service {

  @ApiProperty({required: false, nullable: true})
  services_list: JsonValue;

  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: false, nullable: true })
  userId: number;

  createdAt: Date;
  updatedAt: Date;

  @ApiProperty()
  user: UserEntity

  constructor({user, ...data}: Partial<ServiceEntity>){
    Object.assign(this, data)
    if(user){
      this.user = new UserEntity(user);
    }
  }
}
