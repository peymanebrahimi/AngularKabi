import { Component, inject } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-home',
  imports: [CommonModule],
  templateUrl: './movie-home.component.html',
  styleUrl: './movie-home.component.scss'
})
export class MovieHomeComponent {
  movieService = inject(MovieService);
  movies = this.movieService.movies();
}
