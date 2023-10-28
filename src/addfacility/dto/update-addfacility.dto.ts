import { PartialType } from '@nestjs/swagger';
import { CreateAddfacilityDto } from './create-addfacility.dto';

export class UpdateAddfacilityDto extends PartialType(CreateAddfacilityDto) {}
