import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { ProductListComponent } from './product-list.component';




@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    PrimengModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent
      }
    ])
  ],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductListModule { }
