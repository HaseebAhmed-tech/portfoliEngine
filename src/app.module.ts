import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SocialsModule } from './socials/socials.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [PrismaModule, UsersModule, SocialsModule, StatsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}