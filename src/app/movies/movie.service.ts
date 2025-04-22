import { Injectable, signal } from '@angular/core';
import { MOVIES } from './movieData';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  readonly #movies = signal(MOVIES);

  movies = this.#movies.asReadonly();
}
