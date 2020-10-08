import { Component } from '@angular/core';
import { AppCounterService } from './services/app-counter.service';
import { MyCounterService } from './services/my-counter.service';

export interface Post {
  title: string,
  text: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MyCounterService]
})
export class AppComponent {
  constructor(public myCounterService: MyCounterService){

  };


};
