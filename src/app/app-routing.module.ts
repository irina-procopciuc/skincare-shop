import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { RoutesEnum } from './shared/enums/routes/routes.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesEnum.HOME_ROUTE,
    pathMatch: 'full',
  },
  {
    path: RoutesEnum.HOME_ROUTE,
    component: HomeComponent,
  },
  {
    path: RoutesEnum.PRODUCTS_ROUTE,
    loadChildren: () =>
      import('./features/product-list/product-list.module').then(
        (m) => m.ProductListModule
      ),
  },
  {
    path: RoutesEnum.REVIEWS_ROUTE,
    loadChildren: () =>
      import('./features/reviews/reviews.module').then(
        (m) => m.ReviewsModule
      ),
  },
  // {
  //   path: RoutesEnum.ACCOUNT_ROUTE,
  //   loadChildren: () =>
  //     import('./features/account/account.module').then(
  //       (m) => m.AccountModule
  //     ),
  // },
  {
    path: RoutesEnum.CART_ROUTE,
    loadChildren: () =>
      import('./features/cart/cart.module').then(
        (m) => m.CartModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
