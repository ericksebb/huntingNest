import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { Prisma } from '@prisma/client';
import { PrismaService } from './prisma/prisma.service';
import { CreaturesModule } from './creatures/creatures.module';

@Module({
  imports: [PrismaModule, CreaturesModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
