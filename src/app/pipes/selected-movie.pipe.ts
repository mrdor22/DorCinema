import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '../../app/models/movie';
@Pipe({
  name: 'selectedMovie'
})
export class SelectedMoviePipe implements PipeTransform {

  transform(allMovies: Movie[], movieId: string): any {
    return allMovies.filter(m => m.imdbID === movieId)
  }

}
