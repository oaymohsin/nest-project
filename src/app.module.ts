import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://mohsinmaken3:76510063Msn@cluster0.epwsfar.mongodb.net/NestJSPROJECT'),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
