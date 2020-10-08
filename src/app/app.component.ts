import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  title: string,
  text: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  e: number = Math.E;
  str: string = 'hello world';
  date: Date = new Date();
  float: number = 0.42;
  obj: Object = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
};

  search: string = '';
  searchField: string = 'title';
  posts: Post[] = [
    { title: 'Bear', text: 'The beast bear in the world'},
    { title: 'Bread', text: 'The beast Bread in the world'},
    { title: 'JS', text: 'The beast PL in the world'},
  ];

  p: Promise<string> = new Promise<string>( resolve => {
    setTimeout( () => {
      resolve('RESOLVED!');
    }, 4000);
  });

  myDate: Observable<Date> = new Observable( obs => {
    setInterval( () => {
      obs.next( new Date() );
    }, 1000);
  });

  addPost(): void {
    this.posts.unshift({
      title: 'Angular 8',
      text: 'Nephelim!!!!!'
    });
  };

};
