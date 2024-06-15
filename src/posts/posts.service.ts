import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/User.schema';
import { Post } from 'src/schemas/Post.schema';
import { createPostDto } from './dto/createPost.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async createPost({ userId, ...createPostDto }) {
    const findUser = await this.userModel.findById(userId);
    if (!findUser) throw new HttpException('user not found', 404);
    const newPost = new this.postModel({ ...createPostDto, user: userId });
    const savedPost = await newPost.save();
    const findPost= await this.postModel.findById(savedPost._id).populate({
        path: 'user',
        select: 'displayName'
      })
    return findPost;
  }
}
