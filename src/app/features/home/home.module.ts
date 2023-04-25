import { NgModule } from '@angular/core';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    PrimengModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  exports: [HomeComponent]
})
export class HomeModule { }
