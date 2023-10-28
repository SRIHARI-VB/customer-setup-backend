import { ApiProperty } from "@nestjs/swagger";

export class CreateAddfacilityDto {

    @ApiProperty()
    facility_nickname: string;

    @ApiProperty({required:false})
    floor_number?: string;

    @ApiProperty()
    location: string;

    @ApiProperty({required:false})
    service?: string;

    
}
