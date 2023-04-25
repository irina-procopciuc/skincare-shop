import { NgModule } from '@angular/core';

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
