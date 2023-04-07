import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent {

}

@NgModule({
  declarations: [ReviewsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    RouterModule.forChild([
      {
        path: '',
        component: ReviewsComponent
      }
    ])
  ],
  exports: [ReviewsComponent]
})
export class ReviewsModule {}
