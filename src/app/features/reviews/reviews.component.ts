import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import * as data from '../../api/reviews.json';
import { Review } from 'src/app/shared/models/review';
import { ReviewFormComponent } from './review-form/review-form.component';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  showDialog: boolean = false;
  dialogHeader: string = '';
  selectedReview?: Review;
  reviewsCount?: number;

  ngOnInit(): void {
    this.reviews = (data as any).default;
    this.reviewsCount = this.reviews.length;
  }

  saveReview(review: Review): void {
    if(this.reviews.find(el => el.id === review.id)) {
      let index = this.reviews.findIndex(el => el.id === review.id);
      this.reviews[index] = review;
    } else {
      this.reviews.push(review);
      this.reviewsCount = this.reviews.length;
    }
  }

  editReview(review: Review): void {
    this.showDialog = true;
    this.dialogHeader = "Edit review ";
    this.selectedReview = review;
  }

  deleteReview(review: Review): void {

  }

  addReview(): void {
   this.showDialog = true;
   this.dialogHeader = "Add new review";
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'success';
    }
  }
}

@NgModule({
  declarations: [ReviewsComponent, ReviewFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReviewsComponent,
      },
    ]),
  ],
  exports: [ReviewsComponent],
})
export class ReviewsModule {}
