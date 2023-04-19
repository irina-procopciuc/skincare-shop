import { Component, OnInit } from '@angular/core';
import * as data from '../../api/products.json';
import * as promotionsData from '../../api/promotions.json';
import { Product } from 'src/app/shared/models/product';
import { Promotion } from 'src/app/shared/models/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredProductsList: Product[] = [];
  activePromotions: Promotion[] = [];

  ngOnInit(): void {
    this.featuredProductsList = (data as any).default.slice(0, 3);
    this.activePromotions = (promotionsData as any).default;
    this.activePromotions = this.activePromotions.filter(promotion => promotion.isActive === true);
  }
}
