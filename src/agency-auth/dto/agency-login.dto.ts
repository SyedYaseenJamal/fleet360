import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AgencyLoginDto {
  @IsEmail()
  contactEmail: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
