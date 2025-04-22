import { Component, computed, inject, input, numberAttribute, signal } from '@angular/core';
import { MovieService } from '../movie.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-detail',
  imports: [CommonModule],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {
  private movieSerives = inject(MovieService);

  id = input.required({ transform: numberAttribute });

  movie = computed(() => this.movieSerives.movies().find(x => x.id === this.id()))

  poster = computed(() => `movies/${this.movie()?.posterImage ?? ''}`)
}
