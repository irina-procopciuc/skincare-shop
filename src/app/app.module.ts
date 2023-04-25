import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimengModule } from './shared/primeng/primeng.module';
import { MenuModule } from './layout/menu/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountModule } from './features/account/account.module';
import { HomeModule } from './features/home/home.module';
import { ProductListModule } from './features/product-list/product-list.module';
import { ReviewsModule } from './features/reviews/reviews.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimengModule,
    MenuModule,
    AccountModule,
    HomeModule,
    ProductListModule,
    ReviewsModule
  ],
  exports: [PrimengModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
