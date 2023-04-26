import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfirmationService, MessageService } from 'primeng/api';
import { CartComponent } from './cart/cart.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CartComponent
      }
    ])
  ],
  providers: [ConfirmationService, MessageService]
})
export class CartModule { }
