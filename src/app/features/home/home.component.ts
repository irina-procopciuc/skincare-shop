import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import data from '../../api/products.json';
import promotionsData from '../../api/promotions.json';
import { Product } from 'src/app/shared/models/product';
import { Promotion } from 'src/app/shared/models/promotion';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredProductsList: Product[] = [];
  activePromotions: Promotion[] = [];

  constructor(private router: Router, private cartService: CartService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.initHomepageLists();
  }

  openProductDetails(product: Product): void {
    this.router.navigate(['products', product.id]);
  }

  addProductToCart(product: Product): void {
    const cartProduct: CartProduct = {
      ...product,
      cartQuantity: 1
    }
    this.cartService.addToCart(cartProduct);
    this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Product added to cart' });
  }

  private initHomepageLists(): void {
    this.featuredProductsList = data?.slice(0, 3);
    this.activePromotions = promotionsData;
    this.activePromotions = this.activePromotions.filter(promotion => promotion.isActive);
  }
}
