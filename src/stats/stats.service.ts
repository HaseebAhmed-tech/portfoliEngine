import { Injectable } from '@nestjs/common';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatsService {
  constructor(private prisma: PrismaService) {}

  // create(createStatDto: CreateStatDto[]) {
  //   return this.prisma.stat.createManyAndReturn({ data: createStatDto });
  // }

  // findAll() {
  //   return this.prisma.stat.findMany();
  // }

  // findAllByUserId(id: number) {
  //   return this.prisma.stat.findMany({ where: { userId: id } });
  // }

  // update(userId: number, stat: string, updateStatDto: UpdateStatDto) {
  //   return this.prisma.stat.update({
  //     where: {
  //       userId_text: {
  //         userId: userId,
  //         text: stat,
  //       },
  //     },
  //     data: updateStatDto,
  //   });
  // }

  // findOneByName(userId: number, stat: string) {
  //   return this.prisma.stat.findUnique({
  //     where: {
  //       userId_text: {
  //         userId: userId,
  //         text: stat,
  //       },
  //     },
  //   });
  // }

  // removeByName(id: number, stat: string) {
  //   return this.prisma.stat.delete({
  //     where: { userId_text: { userId: id, text: stat } },
  //   });
  // }

  // removeBYUserId(id: number) {
  //   return this.prisma.stat.deleteMany({
  //     where: { userId: id },
  //   });
  // }
}
