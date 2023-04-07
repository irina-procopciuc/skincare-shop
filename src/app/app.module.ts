import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './layout/menu/menu.component';
import { ProductListComponent, ProductListModule } from './features/product-list/product-list.component';
import { ReviewsComponent, ReviewsModule } from './features/reviews/reviews.component';
import { AccountComponent, AccountModule } from './features/account/account.component';
import { HomeComponent } from './features/home/home.component';
import { PrimengModule } from './shared/primeng/primeng.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PrimengModule
  ],
  exports: [PrimengModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
