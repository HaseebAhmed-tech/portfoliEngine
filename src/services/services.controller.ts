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
@Controller('services')
@ApiTags('Services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateServiceDto })
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Get()
  @ApiBearerAuth()
  @ApiResponse({ type: [CreateServiceDto], isArray: true })
  findAll() {
    return this.servicesService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateServiceDto })
  findOne(@Param('id', ParseIntPipe) id: string) {
    return this.servicesService.findOne(+id);
  }

  @Get(':userId')
  @ApiBearerAuth()
  @ApiOkResponse({ type: [CreateServiceDto], isArray: true })
  findAllByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.servicesService.findAllByUserId(userId);
  }

  @Get(':userId/:service')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateServiceDto })
  findOneByName(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('service') service: string,
  ) {
    return this.servicesService.findOneByName(userId, service);
  }

  @Patch(':userId/:service')
  @ApiBearerAuth()
  @ApiOkResponse({ type: UpdateServiceDto })
  update(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('service') service: string,
    @Body() updateServiceDto: UpdateServiceDto,
  ) {
    return this.servicesService.update(userId, service, updateServiceDto);
  }

  @Delete(':userId')
  @ApiBearerAuth()
  @ApiOkResponse({ type: CreateServiceDto })
  remove(@Param('userId', ParseIntPipe) userId: number) {
    return this.servicesService.removeByUserId(userId);
  }
}
