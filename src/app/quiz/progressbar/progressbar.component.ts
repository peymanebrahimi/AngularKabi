import { Component, input, computed } from '@angular/core';
import { getRatio } from '../logic';

@Component({
  selector: 'app-progressbar',
  imports: [],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent {
  readonly total = input.required<number>();
  readonly value = input.required<number>();

  readonly ratio = computed(() => getRatio(this.value(), this.total()));
  readonly percentage = computed(() => `${this.ratio() * 100}%`);
}
