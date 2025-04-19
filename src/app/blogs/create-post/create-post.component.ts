import { Component, output } from '@angular/core';
import { Post, generateId } from '../extra';

@Component({
  selector: 'app-create-post',
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  readonly newPost = output<Post>();

  onCreateNew(title: string, content: string) {
    const p: Post = {
      content: content,
      date: Date.now(),
      title: title,
      id: generateId(),
    };
    console.info(p);
    this.newPost.emit(p);
  }
}
