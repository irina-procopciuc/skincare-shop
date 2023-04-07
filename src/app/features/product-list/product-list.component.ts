import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

}


@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductListComponent
      }
    ])
  ],
  exports: [ProductListComponent]
})
export class ProductListModule {}
