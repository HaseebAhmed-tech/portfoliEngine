import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EducationService } from './education.service';
import { CreateEducationDto } from './dto/create-education.dto';
import { UpdateEducationDto } from './dto/update-education.dto';
import { EducationEntity } from './entities/education.entity';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@Controller('education')
@ApiTags("Education")
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post(':id')
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateEducationDto})
  async create(@Param('id', ParseIntPipe) userId: number,
    @Body() createEducationDto: CreateEducationDto) {
    return new EducationEntity (await this.educationService.create( userId ,createEducationDto));
  }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({ type: [CreateEducationDto]})

  async findAll() {
    const educationList = await this.educationService.findAll();
    return educationList.map((education)=> new EducationEntity(education));
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateEducationDto})
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new EducationEntity(await this.educationService.findOne(id));
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateEducationDto})
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateEducationDto: UpdateEducationDto) {
    return new EducationEntity (await this.educationService.update(id, updateEducationDto));
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateEducationDto})
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new EducationEntity (await this.educationService.remove(id));
  }
}
