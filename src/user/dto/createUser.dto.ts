import { IsNotEmpty, IsOptional, IsString } from "class-validator";



export class createUserDto{
    @IsNotEmpty()
    @IsString()
    userName:string;

    @IsString()
    @IsOptional()
    displayName?:string

}