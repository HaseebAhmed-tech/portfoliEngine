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
import { SocialsService } from './socials.service';
import { CreateSocialDto } from './dto/create-social.dto';
import { UpdateSocialDto } from './dto/update-social.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { SocialEntity } from './entities/social.entity';
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('socials')
@ApiTags('Socials')
// @UseGuards(JwtAuthGuard)
export class SocialsController {
  constructor(private socialsService: SocialsService) {}

  @ApiCreatedResponse({ type: CreateSocialDto })
  @ApiBearerAuth()
  @Post()
  async create(@Body() createSocialDto: CreateSocialDto) {
    return new SocialEntity(await this.socialsService.create(createSocialDto));
  }

  @ApiOkResponse({ type: [CreateSocialDto] })
  @ApiBearerAuth()
  @Get()
  async findAll() {
    const socials = await this.socialsService.findAll();
    return socials.map((social) => new SocialEntity(social));
  }

  @ApiOkResponse({ type: CreateSocialDto })
  @ApiBearerAuth()
  @Get(':id')
  async findByUserId(@Param('id', ParseIntPipe) id: number) {
    return new SocialEntity(await this.socialsService.findByUserId(id));
  }

  @ApiOkResponse({ type: UpdateSocialDto })
  @ApiBearerAuth()
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateSocialDto: UpdateSocialDto,
  ) {
    return new SocialEntity(
      await this.socialsService.update(+id, updateSocialDto),
    );
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CreateSocialDto })
  async remove(@Param('id', ParseIntPipe) id: number) {
    return new SocialEntity(await this.socialsService.remove(id));
  }
}
