import { ApiProperty } from '@nestjs/swagger';
import { Stat } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class StatEntity implements Stat {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: false, nullable: true })
  userId: number;

  @ApiProperty({ required: true })
  num: number;

  @ApiProperty({ required: true })
  text: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  user: UserEntity;

  constructor({ user, ...data }: Partial<StatEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }
  }
}
