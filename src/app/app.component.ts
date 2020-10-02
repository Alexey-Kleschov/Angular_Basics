import { Component, OnInit } from '@angular/core';

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
export class AppComponent implements OnInit {

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

  ngOnInit(): void {
    // setTimeout( () => {
    //   console.log('Timeout');
    //   this.posts[0] = {
    //     title: 'Changed',
    //     text: 'Changed 2',
    //     id: 48
    //   };
    // }, 3000);
  };

  updatePost(post: Post): void {
    this.posts.unshift(post);
  };

  removePost(id: number): void{
    this.posts = this.posts.filter( post => post.id !== id);
  };

}
