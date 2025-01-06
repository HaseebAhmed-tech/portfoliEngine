import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JsonArray } from '@prisma/client/runtime/library';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}
  create(createServiceDto: CreateServiceDto) {
    return this.prisma.service.create({ data: createServiceDto });
  }

  findAll() {
    return this.prisma.service.findMany();
  }

  findOneById(id: number) {
    return this.prisma.service.findUnique({
      where: {
        id: id
      },
    });
  }
  findOneByUserId(userId: number) {
    return this.prisma.service.findUnique({
      where: {
        userId: userId
      },
    });
  }

  update(userId: number, updateServiceDto: UpdateServiceDto) {
    return this.prisma.service.upsert({
      where: { userId: userId },
      update: updateServiceDto, // Updates if the record exists
      create: { userId: userId, ...updateServiceDto }, // Creates if the record does not exist
    });
  }

  removeByUserId(userId: number) {
    return this.prisma.service.delete({
      where: { userId: userId },
    });
  }

  removeById(id: number){
    return this.prisma.service.delete({
      where: {id: id}
    })
  }

}
