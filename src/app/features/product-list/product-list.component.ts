import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';
import data from '../../api/products.json';
import { Product } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { CartProduct } from 'src/app/shared/models/cartProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  productsList: Product[] = [];

  constructor(private router: Router, private cartService: CartService, private messageService: MessageService){}

  ngOnInit(): void {
    this.initiateProductList();
  }

  initiateProductList(): void {
    this.productsList = data;
  }

  openProductDetails(product: Product): void {
    this.router.navigate(['products', product.id])
  }

  addProductToCart(product: Product): void {
    const cartProduct: CartProduct = {
      ...product,
      cartQuantity: 1
    }
    this.cartService.addToCart(cartProduct);
    this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Product added to cart' });
  }
}
