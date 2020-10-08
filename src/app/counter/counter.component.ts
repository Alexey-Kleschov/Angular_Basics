import { Component } from '@angular/core';
import { MyCounterService } from '../services/my-counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  providers: [MyCounterService]
})
export class CounterComponent {

  constructor(public myCounterService: MyCounterService) { }

}
