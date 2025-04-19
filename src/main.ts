import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { GuessComponent } from './app/guess/guess.component';

@Component({
  selector: 'app-root',
  imports: [GuessComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
   <app-guess></app-guess>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
