import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddfacilityService } from './addfacility.service';
import { CreateAddfacilityDto } from './dto/create-addfacility.dto';
import { UpdateAddfacilityDto } from './dto/update-addfacility.dto';

@Controller('addfacility')
export class AddfacilityController {
  constructor(private readonly addfacilityService: AddfacilityService) {}

  @Post()
  create(@Body() createAddfacilityDto: CreateAddfacilityDto) {
    return this.addfacilityService.create(createAddfacilityDto);
  }

  @Get()
  findAll() {
    return this.addfacilityService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addfacilityService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddfacilityDto: UpdateAddfacilityDto) {
    return this.addfacilityService.update(+id, updateAddfacilityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addfacilityService.remove(+id);
  }
}
