import { Post } from './../app.component';
import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('Info ref: ', this.infoRef.nativeElement);
    
  }

}
