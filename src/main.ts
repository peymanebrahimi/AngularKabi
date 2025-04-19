import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { GuessComponent } from './app/guess/guess.component';
import { BlogManagementComponent } from './app/blogs/blog-management/blog-management.component';

@Component({
  selector: 'app-root',
  imports: [GuessComponent, BlogManagementComponent],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <app-blog-management></app-blog-management>
   <app-guess></app-guess>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
