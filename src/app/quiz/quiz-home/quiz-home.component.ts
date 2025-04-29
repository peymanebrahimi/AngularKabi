import { Component, computed, signal } from '@angular/core';
import { ProgressbarComponent } from "../progressbar/progressbar.component";
import { QuestionPresenterComponent } from "../question-presenter/question-presenter.component";
import { SummaryComponent } from "../summary/summary.component";
import { Question } from '../model';
import { ALL_QUESTIONS } from '../data';

@Component({
  selector: 'app-quiz-home',
  imports: [ProgressbarComponent, QuestionPresenterComponent, SummaryComponent],
  templateUrl: './quiz-home.component.html',
  styleUrl: './quiz-home.component.scss'
})
export class QuizHomeComponent {
  numberOfTotal = signal<number>(ALL_QUESTIONS.length);
  numberOfAnswerd = signal<number>(0);
  currentQuestion = computed<Question>(() => ALL_QUESTIONS[this.numberOfAnswerd()]);


  
  ratio = computed(() => {return this.numberOfAnswerd() / this.numberOfTotal()});
  isFinished = computed(() => this.numberOfAnswerd() === this.numberOfTotal());

  answerSelected(n: number) {
    this.numberOfAnswerd.update(n => n + 1);
  }

  restart(){
    this.numberOfAnswerd.set(0);
  }
}
