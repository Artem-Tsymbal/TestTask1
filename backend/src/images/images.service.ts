import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { IImage } from './interfaces';

@Injectable()
export class ImagesService {
  private readonly jsonDemoImagesUrl: string;

  constructor(configService: ConfigService, private httpService: HttpService) {
    this.jsonDemoImagesUrl = configService.get<string>('JSON_DEMO_IMAGES');
  }

  async findAll(): Promise<IImage[]> {
    try {
      const { data } = await firstValueFrom(
        this.httpService.get(this.jsonDemoImagesUrl),
      );

      return data.flat();
    } catch (error) {
      throw new Error(
        `Failed to fetch images from ${this.jsonDemoImagesUrl}: ${error.message}`,
      );
    }
  }
}
