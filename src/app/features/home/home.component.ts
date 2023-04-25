import { Component, OnInit } from '@angular/core';
import data from '../../api/products.json';
import promotionsData from '../../api/promotions.json';
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
    this.initHomepageLists();
  }

  private initHomepageLists(): void {
    this.featuredProductsList = data?.slice(0, 3);
    this.activePromotions = promotionsData;
    this.activePromotions = this.activePromotions.filter(promotion => promotion.isActive);
  }
}
