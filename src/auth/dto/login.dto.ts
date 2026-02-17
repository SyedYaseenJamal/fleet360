import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'DRIVER', enum: ['PRINCIPAL', 'FLEET_MANAGER', 'ACCOUNTANT', 'DRIVER'] })
  @IsString()
  role: string;
}
