import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SocialsModule } from './socials/socials.module';
import { StatsModule } from './stats/stats.module';
import { ServicesModule } from './services/services.module';
import { ResumeModule } from './resume/resume.module';
import { ExperienceModule } from './experience/experience.module';
import { EducationModule } from './education/education.module';
import { SkillModule } from './skill/skill.module';
import { AboutModule } from './about/about.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    SocialsModule,
    StatsModule,
    AuthModule,
    ServicesModule,
    ResumeModule,
    ExperienceModule,
    EducationModule,
    SkillModule,
    AboutModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
