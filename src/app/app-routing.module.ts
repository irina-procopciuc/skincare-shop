import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: () =>
    import('./features/product-list/product-list.component').then(
      (m) => m.ProductListModule
    )
  },
  {
    path: 'reviews',
    loadChildren: () =>
    import('./features/reviews/reviews.component').then(
      (m) => m.ReviewsModule
    )
  },
  {
    path: 'account',
    loadChildren: () =>
    import('./features/account/account.component').then(
      (m) => m.AccountModule
    )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
