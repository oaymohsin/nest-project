import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { createUserDto } from './dto/createUser.dto';
import { dot } from 'node:test/reporters';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //   ValidationPipe is used here to validate incoming request data.WhiteList is true to allow only the defined data in the dto
  //   and forbidNonwhiteListed is set to true to throw error when extra data is passed to the body that is not present in the
  //   dto

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  createUser(@Body() createUserDto: createUserDto) {
    console.log(createUserDto);
    return this.userService.createUser(createUserDto);
  }

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
}
