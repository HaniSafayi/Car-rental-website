import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
// import { Role } from '../utils/role.enum';

require('cors');

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  // @IsString()
  // readonly role: Role;

}