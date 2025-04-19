import { Component, signal } from '@angular/core';
import { POSTS, Post } from '../extra';
import { PostListComponent } from '../post-list/post-list.component';
import { CreatePostComponent } from '../create-post/create-post.component';

@Component({
  selector: 'app-blog-management',
  imports: [PostListComponent, CreatePostComponent],
  templateUrl: './blog-management.component.html',
  styleUrl: './blog-management.component.scss'
})
export class BlogManagementComponent {
  posts = signal(POSTS);

  deletePost(p: Post) {
    //newArray = oldArray.filter(obj => obj !== removedObj);
    this.posts.update(x => x.filter(c => c !== p));
  }

  addPost(newPost: Post) {
    this.posts.update(x => [...x, newPost]);
  }

}
