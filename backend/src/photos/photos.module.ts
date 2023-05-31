import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [PhotosController],
  providers: [PhotosService],
})
export class PhotosModule {}
