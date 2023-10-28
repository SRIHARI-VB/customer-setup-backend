import { Test, TestingModule } from '@nestjs/testing';
import { AddfacilityService } from './addfacility.service';

describe('AddfacilityService', () => {
  let service: AddfacilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AddfacilityService],
    }).compile();

    service = module.get<AddfacilityService>(AddfacilityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
