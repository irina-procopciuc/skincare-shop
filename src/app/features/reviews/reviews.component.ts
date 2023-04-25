import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import data from '../../api/reviews.json';
import { Review } from 'src/app/shared/models/review';
import { ReviewService } from './services/review.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  showDialog?: boolean;
  dialogHeader = '';
  selectedReview?: Review;
  reviewsCount?: number;

  constructor(
    private reviewService: ReviewService,
    private confirmationService: ConfirmationService,
     private messageService: MessageService
  ){}

  ngOnInit(): void {
    this.initComponentData();
  }

  saveReview(review: Review): void {
    if(this.reviews.find(listReview => listReview.id === review.id)) {
      const index = this.reviews.findIndex(listReview => listReview.id === review.id);
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
        const index= this.reviews.indexOf(this.reviews?.filter(listReview => listReview.id === review.id)[0]);
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

  private initComponentData(): void {
    this.reviews = data;
    this.reviewsCount = this.reviews.length;
    this.reviewService.getShowDialog().subscribe(shouldShowDialog => this.showDialog = shouldShowDialog);
  }
}
