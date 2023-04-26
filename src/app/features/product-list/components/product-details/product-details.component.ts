import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MessageService } from 'primeng/api';
import data from '../../../../api/products.json';
import { Product } from 'src/app/shared/models/product';
import { CartProduct } from 'src/app/shared/models/cartProduct';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  selectedProductId?: string | null;
  selectedProduct?: Product;
  productsList: Product[] = [];
  selectedQuantity?: number = 1;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.setSelectedProduct();
  }

  setSelectedProduct(): void {
    this.productsList = data;
    this.selectedProductId = this.route.snapshot.paramMap?.get('id');
    this.selectedProduct = this.productsList.filter(
      (product) => product.id === Number(this.selectedProductId)
    )[0];
  }

  addProductToCart(): void {
    const cartProduct: CartProduct = {
      ...this.selectedProduct,
      cartQuantity: Number(this.selectedQuantity),
    };
    this.cartService.addToCart(cartProduct);
    this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Product added to cart' });
  }
}
