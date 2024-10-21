import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Controller('services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.servicesService.findOne(+id);
  }

  @Get(':userId/:service')
  findOneByName(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('service') service: string,
  ) {
    return this.servicesService.findOneByName(userId, service);
  }

  @Patch(':userId/:service')
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('service') service: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.servicesService.update(userId, service, updateServiceDto);
  }

  @Delete(':userId')
  remove(@Param('userId', ParseIntPipe) userId: number) {
    return this.servicesService.removeByUserId(userId);
  }
}
