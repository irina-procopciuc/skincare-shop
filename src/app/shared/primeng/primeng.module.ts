import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { RatingModule } from 'primeng/rating';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { MenubarModule } from 'primeng/menubar';
import { ToastModule } from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';

const importsExports: (typeof PaginatorModule)[] = [
  MenubarModule,
  CardModule,
  ButtonModule,
  TableModule,
  TagModule,
  RatingModule,
  ToastModule,
  ConfirmDialogModule,
  DialogModule,
  DropdownModule,
  InputTextModule
];

@NgModule({
  imports: importsExports,
  exports: importsExports
})
export class PrimengModule {}
