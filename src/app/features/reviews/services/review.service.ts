import { BehaviorSubject } from 'rxjs';

export class ReviewService {
  private showDialog$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  showDialog(): void {
    this.showDialog$.next(true);
  }

  hideDialog(): void {
    this.showDialog$.next(false);
  }

  getShowDialog(): BehaviorSubject<boolean> {
    return this.showDialog$;
  }
}
