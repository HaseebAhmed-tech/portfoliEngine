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
import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { ServiceEntity } from './entities/service.entity';
@Controller('services')
@ApiTags('Services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateServiceDto})
  async create(@Body() createServiceDto: CreateServiceDto) {
    return new ServiceEntity(await this.servicesService.create(createServiceDto));
  }

  @Get()
  @ApiBearerAuth()
  @ApiResponse({ type: [CreateServiceDto]})
  async findAll() {
    const services = await this.servicesService.findAll()
    return services.map( (service)=> new ServiceEntity(service) );
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateServiceDto })
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return new  ServiceEntity(await this.servicesService.findOneById(id));
  }

  @Get(':userId')
  @ApiBearerAuth()
  @ApiOkResponse({type: CreateServiceDto})
  async findOneByUserId(@Param('userId', ParseIntPipe) userId: number){
    return new ServiceEntity(await this.servicesService.findOneByUserId(userId))
  }

  @Patch(':userId')
  @ApiBearerAuth()
  @ApiOkResponse({ type: UpdateServiceDto })
  async update(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return new ServiceEntity(await this.servicesService.update(userId, updateServiceDto));
  }

  @Delete(':userId')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateServiceDto })
  async remove(@Param('userId', ParseIntPipe) userId: number) {
    return new ServiceEntity(await this.servicesService.removeByUserId(userId));
  }

  @Delete(':id')
  @ApiResponse({type: CreateServiceDto})
  @ApiBearerAuth()
  async removeById(@Param('id', ParseIntPipe) id: number){
    return new ServiceEntity(await this.servicesService.removeById(id))
  }
}