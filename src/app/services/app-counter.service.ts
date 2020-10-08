
export class AppCounterService {
  counter: number = 0;

  increase(): void {
    this.counter++;
  };

  deсrease(): void {
    this.counter--;
  };
};
