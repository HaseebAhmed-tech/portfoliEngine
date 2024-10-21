import { ApiProperty } from '@nestjs/swagger';
import { Social } from '@prisma/client';
import { UserEntity } from 'src/users/entities/user.entity';

export class SocialEntity implements Social {
  @ApiProperty({ required: true })
  id: number;

  @ApiProperty({ required: false, nullable: true })
  userId: number | null;

  @ApiProperty({ required: false, nullable: true })
  linkedin: string | null;

  @ApiProperty({ required: false, nullable: true })
  github: string | null;

  @ApiProperty({ required: false, nullable: true })
  instagram: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  user: UserEntity;

  constructor({ user, ...data }: Partial<SocialEntity>) {
    Object.assign(this, data);

    if (user) {
      this.user = new UserEntity(user);
    }
  }
}
