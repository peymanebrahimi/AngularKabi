import { Component, input, output } from '@angular/core';
import { Question } from '../model';

@Component({
  selector: 'app-question-presenter',
  imports: [],
  templateUrl: './question-presenter.component.html',
  styleUrl: './question-presenter.component.scss'
})
export class QuestionPresenterComponent {
  question = input.required<Question>();
  selectedAnswer = output<number>();

  selectAnswer(index: number) {
    this.selectedAnswer.emit(index);
  }
}
