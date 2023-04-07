import { Component, OnInit } from '@angular/core';
import * as data from '../../api/products.json';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredProductsList: Product[] = [];

  ngOnInit(): void {
    this.featuredProductsList = (data as any).default;
  }
}
