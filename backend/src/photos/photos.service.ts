import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { IPhoto } from './interfaces';

@Injectable()
export class PhotosService {
  private readonly jsonDemoPhotosUrl: string;

  constructor(configService: ConfigService, private httpService: HttpService) {
    this.jsonDemoPhotosUrl = configService.get<string>('JSON_DEMO_PHOTOS');
  }

  async findAll(): Promise<IPhoto[]> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(this.jsonDemoPhotosUrl),
      );

      return data.flat();
    } catch (error) {
      throw new Error(
        `Failed to fetch photos from ${this.jsonDemoPhotosUrl}: ${error.message}`,
      );
    }
  }
}
