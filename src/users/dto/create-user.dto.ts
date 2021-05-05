import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ format: 'firstName' })
  first_name: string;

  @IsString()
  @ApiProperty({ format: 'lastName' })
  last_name: string;

  @IsString()
  @IsEmail()
  @ApiProperty({ format: 'email' })
  email: string;
}
