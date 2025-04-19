import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
addGuess,
calcGameState,
  getLatestGuess,
  Guess,
} from './GameState';

@Component({
  selector: 'app-guess',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './guess.component.html',
  styleUrl: './guess.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuessComponent {
  readonly computerGuess = signal(0);
  readonly userGuesses = signal<Guess[]>([])

  readonly gameState = computed(() => calcGameState(this.userGuesses()));
  readonly latestGuess = computed(() => getLatestGuess(this.userGuesses()));

  restartGame() {
    const randomNum = Math.ceil(Math.random() * 100);
    this.computerGuess.set(randomNum);
    this.userGuesses.set([]);
  }

  addGuess(value: number) {
    this.userGuesses.update(guesses => addGuess(this.computerGuess(), guesses, value));
  }

  constructor() {
    this.restartGame();
  }
}
