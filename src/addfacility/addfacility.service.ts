import { Injectable } from '@nestjs/common';
import { CreateAddfacilityDto } from './dto/create-addfacility.dto';
import { UpdateAddfacilityDto } from './dto/update-addfacility.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AddfacilityService {
  constructor(private prisma: PrismaService){} //Dependency Injections
  create(createAddfacilityDto: CreateAddfacilityDto) {
    console.log("Create Addfacility Endpoint Reached");
    return this.prisma.addFacility.create({data:createAddfacilityDto});
  }

  findAll() {
    return this.prisma.addFacility.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} addfacility`;
  }

  update(id: number, updateAddfacilityDto: UpdateAddfacilityDto) {
    return `This action updates a #${id} addfacility`;
  }

  remove(id: number) {
    return `This action removes a #${id} addfacility`;
  }
}
