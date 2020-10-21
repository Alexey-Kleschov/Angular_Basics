import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Post, PostsService } from './posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<Post> {

  constructor(private postService: PostsService){};

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post | Observable<Post> | Promise<Post> {
    return of(this.postService.getById(+route.params['id']))
      .pipe(
        delay(1500)
      );
  }

}
