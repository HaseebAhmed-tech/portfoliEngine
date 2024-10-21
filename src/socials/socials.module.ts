import { Module } from '@nestjs/common';
import { SocialsService } from './socials.service';
import { SocialsController } from './socials.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [SocialsController],
  providers: [SocialsService],
  imports: [PrismaModule],
})
export class SocialsModule {}
