import { Injectable } from '@nestjs/common';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SkillService {
  constructor(private prisma: PrismaService){}

  async create(createSkillDto: CreateSkillDto, userId: number) {
    let resume = await this.prisma.resume.findUnique({where: {userId: userId}})
    if(resume == null){
      resume = await this.prisma.resume.create({data: {userId: userId}})
    }
    return this.prisma.skill.create({data: {resumeId: userId, ...createSkillDto}});
  }

  findAll() {
    return this.prisma.skill.findMany();
  }

  findOne(id: number) {
    return this.prisma.skill.findUnique({ where:{ resumeId: id }});
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {

    let resume = this.prisma.resume.findUnique({where: {userId: id}});
    if(resume !== null){
      this.prisma.resume.create({data: {userId: id}})
    }
    return this.prisma.skill.upsert({
      where: {resumeId: id},
      update: updateSkillDto,
      create: {resumeId: id, ...updateSkillDto}
    });
  }

  remove(id: number) {
    return this.prisma.skill.delete({where: {resumeId: id}});
  }
}
