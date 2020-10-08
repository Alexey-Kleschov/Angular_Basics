import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], search: string = '', searchField: string = 'title'): Post[] {
    if(!search.trim()){
      return posts;
    } else return posts.filter( post => {
      return post[searchField].toLowerCase().includes(search.toLowerCase());
    });
  };

};
