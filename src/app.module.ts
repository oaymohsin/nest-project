import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mohsinmaken3:76510063Msn@cluster0.epwsfar.mongodb.net/NestJSPROJECT'),
    UserModule,
    PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
