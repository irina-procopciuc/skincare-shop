import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu.component';
import { PrimengModule } from 'src/app/shared/primeng/primeng.module';




@NgModule({
  declarations: [MenuComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule
  ],
  providers: [],
  exports: [MenuComponent]
})
export class MenuModule { }
