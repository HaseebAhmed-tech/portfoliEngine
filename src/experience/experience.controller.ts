import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExperienceDto } from './dto/create-experience.dto';
import { UpdateExperienceDto } from './dto/update-experience.dto';
import { ExperienceEntity } from './entities/experience.entity';
import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';


@Controller('experience')
@ApiTags("Experience")
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Post(':id')
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateExperienceDto})

  async create(@Param('id', ParseIntPipe) userId: number,
  @Body() createExperienceDto: CreateExperienceDto) {
    return new ExperienceEntity(await this.experienceService.create(userId, createExperienceDto));
  }
  @ApiBearerAuth()
  @ApiOkResponse({ type: [CreateExperienceDto]})
  @Get()
   async findAll() {
    const experiences = await this.experienceService.findAll()
    return experiences.map((experience) => new ExperienceEntity(experience));
  }

  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateExperienceDto})
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new ExperienceEntity(await this.experienceService.findOne(id));
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UpdateExperienceDto})
  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number,
   @Body() updateExperienceDto: UpdateExperienceDto) {
    return new ExperienceEntity(await this.experienceService.update(id, updateExperienceDto));
  }

  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateExperienceDto})
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new ExperienceEntity(await this.experienceService.remove(id));
  }
}
