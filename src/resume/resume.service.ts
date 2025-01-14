import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResumeService {
  constructor(private prisma:PrismaService){}

  async create(createResumeDto: CreateResumeDto) {
    return this.prisma.resume.create({ data: createResumeDto });
  }

  findAll() {
    return this.prisma.resume.findMany({include: {experience_list: true, education_list: true, skills_list: true, about_me: true}});
  }

  findOne(id: number) {
    return this.prisma.resume.findUnique({where: {
      userId: id
    }});
  }

  remove(id: number) {
    return this.prisma.resume.delete({where: {
      userId: id
    }});
  }
}
