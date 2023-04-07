import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

}


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimengModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent
      }
    ])
  ],
  exports: [AccountComponent]
})
export class AccountModule {}
