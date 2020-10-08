import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class MyCounterService {

  counter: number = 0;

  constructor(public logService: LogService) { }

  increase(): any{
    this.logService.log('inc');
    this.counter++;
  };
  decrease(): any {
    this.logService.log('dec');
    this.counter--;
  }
}
