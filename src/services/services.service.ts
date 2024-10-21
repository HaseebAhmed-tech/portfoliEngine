import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}
  create(createServiceDto: CreateServiceDto) {
    return this.prisma.service.create({ data: createServiceDto });
  }

  findAll() {
    return this.prisma.service.findMany();
  }

  findOne(id: number) {
    return this.prisma.service.findUnique({ where: { id } });
  }

  findOneByName(userId: number, service: string) {
    return this.prisma.service.findUnique({
      where: {
        userId_title: {
          userId: userId,
          title: service,
        },
      },
    });
  }

  update(userId: number, title: string, updateServiceDto: UpdateServiceDto) {
    return this.prisma.service.update({
      where: { userId_title: { userId: userId, title: title } },
      data: updateServiceDto,
    });
  }

  removeByName(userId: number, service: string) {
    return this.prisma.service.delete({
      where: { userId_title: { userId: userId, title: service } },
    });
  }

  removeByUserId(userId: number) {
    return this.prisma.service.deleteMany({ where: { userId } });
  }
}
