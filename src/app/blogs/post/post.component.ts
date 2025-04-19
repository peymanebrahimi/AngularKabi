import { Component, computed, input } from '@angular/core';
import { Post } from '../extra';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  readonly post = input.required<Post>();
  wordCount = computed(() => this.post().content.length)
}
