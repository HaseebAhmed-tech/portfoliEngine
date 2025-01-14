import { Injectable } from '@nestjs/common';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExperienceService {
  constructor(private prisma: PrismaService){}

  async create( userId: number , createExperienceDto: CreateExperienceDto) {
    let resume = await this.prisma.resume.findUnique( {where: {userId: userId}})
    if(resume == null){
      resume = await this.prisma.resume.create({data: {userId: userId}})
    }
    return  this.prisma.experience.create({data: {resumeId: userId , ...createExperienceDto}});
  }

  findAll() {
    return this.prisma.experience.findMany();
  }

  findOne(id: number) {
    return this.prisma.experience.findUnique({where: {resumeId: id}});
  }

  async update(id: number, updateExperienceDto: UpdateExperienceDto) {
    let resume = await this.prisma.resume.findUnique( {where: {userId: id}})
    if(!resume){
      resume = await this.prisma.resume.create({data: {userId: id}})
    }
    return this.prisma.experience.upsert({
      where: {resumeId: id},
      update: updateExperienceDto,
      create: {resumeId: id, ...updateExperienceDto}
    });
  }

  remove(id: number) {
    return this.prisma.experience.delete({where: {resumeId: id}});
  }
}
