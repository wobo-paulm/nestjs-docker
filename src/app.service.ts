import { Injectable } from '@nestjs/common';
import { AppRepository } from './app.repository';

export interface Movie {
  id: number;
  name: string;
  year: number;
}

@Injectable()
export class AppService {
  private appRepository: AppRepository;

  constructor() {
    this.appRepository = new AppRepository();
  }

  getMovies(): Movie[] {
    return this.appRepository.getMovies();
  }
}
