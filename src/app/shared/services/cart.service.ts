import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { CartProduct } from '../models/cartProduct';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts$: BehaviorSubject<CartProduct[]> = new BehaviorSubject<
    CartProduct[]
  >([]);

  constructor() {}

  addToCart(cartProduct: CartProduct): void {
    const currentValue = this.cartProducts$.value;
    let updatedValue;
    let productAlreadyInCart = currentValue.find(
      (currentValueProduct) => currentValueProduct.id === cartProduct.id
    );
    if (productAlreadyInCart) {
      productAlreadyInCart.cartQuantity = productAlreadyInCart.cartQuantity + cartProduct.cartQuantity;
      updatedValue = [...currentValue];
    } else {
      updatedValue = [...currentValue, cartProduct];
    }
    this.cartProducts$.next(updatedValue);
  }

  getCartProducts(): BehaviorSubject<CartProduct[]> {
    return this.cartProducts$;
  }

  removeFromCart(cartProduct: CartProduct): void {
    const currentValue = this.cartProducts$.value;
    let productInCartIndex = currentValue.indexOf(cartProduct);
    currentValue.splice(productInCartIndex, 1);
    this.cartProducts$.next(currentValue);
  }
}
