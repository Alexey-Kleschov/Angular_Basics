import { Component } from '@angular/core';

export interface Post {
  title: string,
  text: string,
  id?: number
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts: Post[] = [
    {
      title: 'Learn Angular components',
      text: 'Still learning...',
      id: 1,
    },
    {
      title: 'Next block',
      text: 'Directives',
      id: 2,
    },
  ];

  updatePost(post: Post) {
    this.posts.unshift(post);
  };

}
