export interface Movie {
  id: number;
  name: string;
  year: number;
}

export class AppRepository {
  private movies: Movie[] = [
    { id: 1, name: 'Star Wars: The Force Awakens', year: 2015 },
    { id: 2, name: 'Star Wars: The Last Jedi', year: 2017 },
    { id: 3, name: 'Star Wars: The Rise of Skywalker', year: 2019 },
  ];

  public getMovies(): Movie[] {
    return this.movies;
  }
}
