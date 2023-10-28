import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AddfacilityModule } from './addfacility/addfacility.module';

@Module({
  imports: [PrismaModule, AddfacilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
