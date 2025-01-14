import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { AboutController } from './about.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AboutController],
  providers: [AboutService],
  imports: [PrismaModule]
})
export class AboutModule {}
