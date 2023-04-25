import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PrimengModule } from 'src/app/shared/primeng/primeng.module';
import { AccountComponent } from './account.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [AccountComponent],
  imports: [
    PrimengModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent
      }
    ])
  ],
  providers: [],
  exports: [AccountComponent]
})
export class AccountModule { }
