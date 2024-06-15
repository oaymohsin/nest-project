import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';
import { createPostDto } from './dto/createPost.dto';

@Controller('posts')
export class PostsController {

    constructor(private postsService:PostsService){}

    @Post()
    @UsePipes(new ValidationPipe())
    createPost(@Body() creatPostDto:createPostDto){
        return this.postsService.createPost(creatPostDto)
    }
}
