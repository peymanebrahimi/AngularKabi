import { Component, input, output } from '@angular/core';
import { Post } from '../extra';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-post-list',
  imports: [PostComponent],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  readonly posts = input.required<Post[]>();
  readonly deletePost = output<Post>();

  onDeletePost(p: Post) {
    this.deletePost.emit(p);
  }
}
