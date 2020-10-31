import { transition, trigger, useAnimation } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { bounce, bounceOutUp } from 'ng-animate';

@Component({
  selector: 'app-animate',
  template: `
    <hr>
    <button (click)='visible = !visible'>Click</button>
    <hr>
    <div [@bounce] class='rect' *ngIf='visible'></div>
  `,
  styleUrls: ['./animate.component.css'],
  animations: [
    trigger('bounce', 
      [
        transition('void => *', useAnimation(bounce)),
        transition('* => void', useAnimation(bounceOutUp, {
          params: {
            timing: 3,
            delay: 0.3
          }
        }))
      ]
    )
  ]
})
export class AnimateComponent implements OnInit {

  visible: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
