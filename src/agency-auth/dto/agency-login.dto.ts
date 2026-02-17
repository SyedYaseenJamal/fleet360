import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AgencyLoginDto {
  @ApiProperty({ example: 'contact@fleetmasters.com.au' })
  @IsEmail()
  contactEmail: string;

  @ApiProperty({ example: 'securePass123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
