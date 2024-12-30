import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular 18';
  postService = inject(PostService);
  posts = this.postService.getPosts();

  // posts:any[] = [];

  constructor() {
    // this.postService.getPosts().subscribe({
    //   next: (data) => {
    //     this.posts = data;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching posts:', err);
    //   },
    // });

    //     this.postService.getPostsWithParams(1).subscribe({
    //   next: (data : any) => {
    //     this.posts = data;
    //   },
    //   error: (err) => {
    //     console.error('Error fetching posts:', err);
    //   },
    // });


  }
}
