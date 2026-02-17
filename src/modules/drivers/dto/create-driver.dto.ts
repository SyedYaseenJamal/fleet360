import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateDriverDto {
  @ApiProperty({ example: 'James Wilson' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'james.wilson@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+61 400 123 456' })
  @IsString()
  @IsNotEmpty()
  phoneNumber: string;

  @ApiProperty({ example: 'DL-2024-78901' })
  @IsString()
  @IsNotEmpty()
  driverLicenseNumber: string;
}
