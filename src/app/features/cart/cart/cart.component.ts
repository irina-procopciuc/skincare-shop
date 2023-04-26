import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

import { CartProduct } from 'src/app/shared/models/cartProduct';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

  cartProducts: CartProduct[] = [];

  constructor(private cartService: CartService, private messageService: MessageService){
  }

  ngOnInit(): void {
    this.getCartProducts();
  }

  removeCartProduct(cartProduct: CartProduct): void {
    this.cartService.removeFromCart(cartProduct);
    this.messageService.add({ severity: 'success', summary: 'Confirmed', detail: 'Product deleted from cart' });
  }

  private getCartProducts(): void {
    this.cartService.getCartProducts().subscribe((cartProducts:CartProduct[]) => {
      this.cartProducts = cartProducts;
    })
  }

}
