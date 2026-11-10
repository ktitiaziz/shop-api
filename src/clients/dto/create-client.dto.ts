import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
export class CreateClientDto {
@ApiProperty({ example: 'Ktiti Aziz' })
@IsString() @IsNotEmpty() fullName: string;
@ApiProperty({ example: 'ktiti@example.com' })
@IsEmail() email: string;
}