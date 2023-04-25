import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { ReviewsComponent } from './reviews.component';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReviewService } from './services/review.service';




@NgModule({
  declarations: [ReviewsComponent, ReviewFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReviewsComponent
      }
    ])
  ],
  providers: [ConfirmationService, MessageService, ReviewService],
  exports: [ReviewsComponent]
})
export class ReviewsModule { }
