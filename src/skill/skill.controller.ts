import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { SkillService } from './skill.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { SkillEntity } from './entities/skill.entity';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@Controller('skill')
@ApiTags("Skill")

export class SkillController {
  constructor(private readonly skillService: SkillService) {}

  @Post(':id')
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateSkillDto})
  async create(@Param('id', ParseIntPipe) userId: number,
    @Body() createSkillDto: CreateSkillDto) {
    return new SkillEntity(await this.skillService.create(createSkillDto, userId));
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: [CreateSkillDto]})
  async findAll() {
    let skills = await this.skillService.findAll();
    return skills.map((skill)=>new SkillEntity (skill));
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateSkillDto})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new SkillEntity(await this.skillService.findOne(id));
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateSkillDto})
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateSkillDto: UpdateSkillDto) {
    return new SkillEntity (await this.skillService.update(id, updateSkillDto));
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateSkillDto})
   async remove(@Param('id', ParseIntPipe) id: number) {
    return new SkillEntity(await this.skillService.remove(id));
  }
}
