import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private showDialog$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor() { }

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
