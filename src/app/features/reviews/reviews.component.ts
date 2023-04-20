import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import * as data from '../../api/reviews.json';
import { Review } from 'src/app/shared/models/review';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewService } from './services/review.service';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  showDialog?: boolean;
  dialogHeader: string = '';
  selectedReview?: Review;
  reviewsCount?: number;

  constructor(
    private reviewService: ReviewService,
    private confirmationService: ConfirmationService,
     private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.reviews = (data as any).default;
    this.reviewsCount = this.reviews.length;
    this.reviewService.getShowDialog().subscribe(el => this.showDialog = el);
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
    this.reviewService.showDialog();
    this.dialogHeader = "Edit review ";
    this.selectedReview = review;
  }

  deleteReview(review: Review): void {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        const index= this.reviews.indexOf(this.reviews?.filter(el => el.id === review.id)[0]);
        this.reviews.splice(index, 1);
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Review deleted' });
      }
  });
  }

  addReview(): void {
   this.reviewService.showDialog();
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
  providers: [ConfirmationService, MessageService]
})
export class ReviewsModule {}
