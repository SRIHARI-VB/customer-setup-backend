import { Module } from '@nestjs/common';
import { AddfacilityService } from './addfacility.service';
import { AddfacilityController } from './addfacility.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AddfacilityController],
  providers: [AddfacilityService],
})
export class AddfacilityModule {}
