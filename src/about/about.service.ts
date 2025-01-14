import { Injectable } from '@nestjs/common';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AboutService {

  constructor(private prisma: PrismaService){}

  async create(createAboutDto: CreateAboutDto, userId: number) {
    let resume = await this.prisma.resume.findUnique( {where: {userId: userId}})
        if(resume == null){
          console.log("Resume",createAboutDto)

        await this.prisma.resume.create({data: {userId: userId}})
        }
        console.log( "Resume Present ",createAboutDto)

    return this.prisma.about.create({data: {resumeId: userId, ...createAboutDto}});
  }

  findAll() {
    return this.prisma.about.findMany();
  }

  findOne(id: number) {
    return this.prisma.about.findUnique({where: {resumeId: id}});
  }

  update(id: number, updateAboutDto: UpdateAboutDto) {
    return this.prisma.about.upsert({
      where: {resumeId: id},
      update: updateAboutDto,
      create: {resumeId: id, ...updateAboutDto}
    });
  }

  remove(id: number) {
    return this.prisma.about.delete({where: {resumeId: id}});
  }
}
