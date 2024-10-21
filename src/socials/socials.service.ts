import { Injectable } from '@nestjs/common';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SocialsService {
  constructor(private prisma: PrismaService) {}

  create(createSocialDto: CreateSocialDto) {
    return this.prisma.social.create({ data: createSocialDto });
  }

  findAll() {
    return this.prisma.social.findMany({ include: { user: true } });
  }

  findByUserId(id: number) {
    return this.prisma.social.findUnique({ where: { userId: id } });
  }

  update(id: number, updateSocialDto: UpdateSocialDto) {
    return this.prisma.social.update({
      where: { userId: id },
      data: updateSocialDto,
    });
  }

  remove(id: number) {
    return this.prisma.social.delete({ where: { userId: id } });
  }
}
