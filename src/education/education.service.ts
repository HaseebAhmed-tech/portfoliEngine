import { Injectable } from '@nestjs/common';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService){}

  async create(userId: number ,createEducationDto: CreateEducationDto) {
     let resume = await this.prisma.resume.findUnique( {where: {userId: userId}})
        if(resume == null){
          resume = await this.prisma.resume.create({data: {userId: userId}})
        }
        return this.prisma.education.create({data: {resumeId: userId , ...createEducationDto}});
      }

  findAll() {
    return this.prisma.education.findMany();
  }

  async findOne(id: number) {
    return this.prisma.education.findUnique({where: {resumeId: id}});
  }

  async update(id: number, updateEducationDto: UpdateEducationDto) {
    let resume = await this.prisma.resume.findUnique( {where: {userId: id}})
    if(!resume){
      resume = await this.prisma.resume.create({data: {userId: id}})
    }
    return this.prisma.education.upsert({
      where: {resumeId: id},
      update: updateEducationDto,
      create: {resumeId: id, ...updateEducationDto}
    });
  }

  remove(id: number) {
    return this.prisma.education.delete({where: {resumeId: id}});
  }
}
