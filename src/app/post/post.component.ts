import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

import { Post } from './../app.component';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  OnDestroy,

  AfterContentInit,
  AfterContentChecked,

  AfterViewInit,
  AfterViewChecked
{

  @Input() post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    console.log('constructor');
  };

  removePost(): void {
    this.onRemove.emit(this.post.id);
  }
//******************************************* */
  ngOnChanges(changes: SimpleChanges): void{
    console.log('ngOnChanges', changes);
  };

  ngOnInit(): void {
    // console.log('Info ref: ', this.infoRef.nativeElement);
    console.log('ngOnInit');
  };

  ngDoCheck(): void {
    console.log('ngDoCheck');
  };
//****************************************** */
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  };

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  };
//***************************************** */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  };

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  };
//****************************************** */
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  };
}
