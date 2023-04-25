import { Component, Input, OnChanges, OnInit, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import * as data from '../../../api/products.json';
import { Product } from 'src/app/shared/models/product';
import { Review } from 'src/app/shared/models/review';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit, OnChanges{
  @Input() header = '';
  @Input() selectedReview: Review | undefined;
  @Input() reviewsCount: number | undefined;
  @Output() reviewSaved = new EventEmitter<Review>();

  reviewForm: FormGroup = new FormGroup('');
  products: Product[] = [];
  showDialog?: boolean;

  constructor(
    private fb: FormBuilder,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.initiateForm();
    this.checkIfSelectedReview();
    this.reviewService.getShowDialog().subscribe(shouldShowDialog => this.showDialog = shouldShowDialog);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!this.reviewForm.controls) {
      this.initiateForm();
    }
    this.checkIfSelectedReview();
  }

  selectProduct(event: any, isReviewInEditMode?: boolean): void {
    this.reviewForm.get('name')?.setValue(event?.value);
    this.reviewForm.get('brand')?.setValue(event?.value.brand);
    this.reviewForm.get('price')?.setValue(event?.value.price);
    this.reviewForm.get('status')?.setValue(this.returnStatus(event?.value.stock));
    if(isReviewInEditMode) {
      this.reviewForm.get('rating')?.setValue(this.selectedReview?.rating);
      this.reviewForm.get('description')?.setValue(this.selectedReview?.description);
    }
  }

  discardChanges(): void {
    this.reviewForm.reset();
    this.reviewService.hideDialog();
  }

  saveReview(): void {
    const review: Review = {
      id: this.selectedReview ? this.selectedReview.id : Number(this.reviewsCount) + 1,
      name: this.reviewForm.get('name')?.value.title,
      brand: this.reviewForm.get('brand')?.value,
      rating: this.reviewForm.get('rating')?.value,
      description: this.reviewForm.get('description')?.value,
      price: this.reviewForm.get('price')?.value,
      status: this.reviewForm.get('status')?.value
    }
    this.reviewSaved.emit(review);
    this.reviewForm.reset();
    this.reviewService.hideDialog();
    this.header = '';
    this.selectedReview = undefined;
  }

  private checkIfSelectedReview() {
    if (this.selectedReview) {
      this.setReadonlyFields(this.selectedReview, true);
    } else {
      this.setReadonlyFields();
    }
  }

  private initiateForm(): void {
    this.reviewForm = this.fb.group({
      name: new FormControl<string | null>(null, Validators.required),
      brand: new FormControl<string | null>({value: null, disabled: true}),
      rating: new FormControl<string | null>(null, Validators.required),
      description: new FormControl<string | null>(null, Validators.required),
      price: new FormControl<string | null>({value: null, disabled: true}),
      status: new FormControl<string | null>({value: null, disabled: true})
    });

  }

  private setReadonlyFields(review?: Review, isReviewInEditMode?: boolean) {
    this.products = (data as any).default;
    this.selectProduct({value: review ?  this.products.filter(listProduct => listProduct.title === review?.name)[0] :this.products[0]}, isReviewInEditMode)
  }

  private returnStatus(value: number): string {
    return value <= 0 ? 'OUTOFSTOCK' : value > 0 && value <=15 ? 'LOWSTOCK' : 'INSTOCK';
  }
}
