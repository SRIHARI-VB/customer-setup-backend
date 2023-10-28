import { Test, TestingModule } from '@nestjs/testing';
import { AddfacilityController } from './addfacility.controller';
import { AddfacilityService } from './addfacility.service';

describe('AddfacilityController', () => {
  let controller: AddfacilityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddfacilityController],
      providers: [AddfacilityService],
    }).compile();

    controller = module.get<AddfacilityController>(AddfacilityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
