import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  // UseGuards,
} from '@nestjs/common';
import { StatsService } from './stats.service';
import { CreateStatDto } from './dto/create-stat.dto';
import { UpdateStatDto } from './dto/update-stat.dto';
import {
  ApiTags,
  ApiResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { StatEntity } from './entities/stat.entity';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('stats')
// @UseGuards(JwtAuthGuard)
// @ApiTags('Stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

//   @Post()
//   @ApiBearerAuth()
//   @ApiCreatedResponse({ type: CreateStatDto })
//   async create(@Body() createStatDto: CreateStatDto[]) {
//     const stats = await this.statsService.create(createStatDto);
//     return stats.map((stat) => new StatEntity(stat));
//   }

//   @Get()
//   @ApiBearerAuth()
//   @ApiResponse({ type: [CreateStatDto], isArray: true })
//   async findAll() {
//     const stats = await this.statsService.findAll();
//     return stats.map((stat) => new StatEntity(stat));
//   }

//   @Get(':id')
//   @ApiBearerAuth()
//   @ApiResponse({ type: [CreateStatDto], isArray: true })
//   async findAllByUserId(@Param('id', ParseIntPipe) id: number) {
//     const stats = await this.statsService.findAllByUserId(id);
//     return stats.map((stat) => new StatEntity(stat));
//   }

//   @Get(':id/:stat')
//   @ApiBearerAuth()
//   @ApiResponse({ type: CreateStatDto })
//   async findOneByName(
//     @Param('id', ParseIntPipe) id: number,
//     @Param('stat') stat: string,
//   ) {
//     return new StatEntity(await this.statsService.findOneByName(id, stat));
//   }

//   @Patch(':id/:stat')
//   @ApiBearerAuth()
//   @ApiOkResponse({ type: UpdateStatDto })
//   async update(
//     @Param('id', ParseIntPipe) id: number,
//     @Param('stat') stat: string,
//     @Body() updateStatDto: UpdateStatDto,
//   ) {
//     return new StatEntity(
//       await this.statsService.update(id, stat, updateStatDto),
//     );
//   }

//   @Delete(':id/:stat')
//   @ApiBearerAuth()
//   @ApiOkResponse({ type: CreateStatDto })
//   async removeByName(
//     @Param('id', ParseIntPipe) id: number,
//     @Param('stat') stat: string,
//   ) {
//     return new StatEntity(await this.statsService.removeByName(id, stat));
//   }

//   @Delete(':id')
//   @ApiBearerAuth()
//   @ApiOkResponse({ type: CreateStatDto })
//   removeByUserId(@Param('id', ParseIntPipe) id: number) {
//     return this.statsService.removeBYUserId(id);
//   }
}
