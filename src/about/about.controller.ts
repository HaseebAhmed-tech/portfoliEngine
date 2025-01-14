import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from './dto/create-about.dto';
import { UpdateAboutDto } from './dto/update-about.dto';
import { AboutEntity } from './entities/about.entity';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('about')
@ApiTags("About")
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Post(':id')
  @ApiCreatedResponse({type: CreateAboutDto})
  @ApiBearerAuth()
  async create(@Body() createAboutDto: CreateAboutDto,
  @Param('id', ParseIntPipe) userId: number) {
  console.log(createAboutDto)
    return new AboutEntity (await this.aboutService.create( createAboutDto, userId));
  }

  @Get()
  @ApiOkResponse({type: [CreateAboutDto]})
  @ApiBearerAuth()
  async findAll() {
    let about = await this.aboutService.findAll()
    return about.map((about)=>new AboutEntity(about));
  }

  @Get(':id')
  @ApiOkResponse({type: CreateAboutDto})
  @ApiBearerAuth()
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new AboutEntity(await this.aboutService.findOne(id));
  }

  @Patch(':id')
  @ApiCreatedResponse({type: CreateAboutDto})
  @ApiBearerAuth()
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateAboutDto: UpdateAboutDto) {
    return new AboutEntity (await this.aboutService.update(id, updateAboutDto));
  }

  @Delete(':id')
  @ApiOkResponse({type: CreateAboutDto})
  @ApiBearerAuth()
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new AboutEntity(await this.aboutService.remove(id));
  }
}
