import { Injectable } from '@angular/core';
import { Product } from '../models/productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];
  cart: Product[] = [];

  constructor() {
    this.products = [
      {
        name: 'Fall Limited Edition Sneakers',
        desc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
        price: 250.0,
        discount: 0.5,
        quantity: 1,
        images: [
          '/assets/images/image-product-1.jpg',
          '/assets/images/image-product-2.jpg',
          '/assets/images/image-product-3.jpg',
          '/assets/images/image-product-4.jpg',
        ],
      },
    ];
  }

  getProducts() {
    return [...this.products];
  }

  setQuantity(index: number, quantity: number) {
    if (this.products[index].quantity == 1 && quantity == -1) return;

    this.products[index].quantity += quantity;
  }

  getProduct(productIndex: number) {
    return this.products[productIndex];
  }

  getProductQuantity(productIndex: number) {
    return this.products[productIndex].quantity;
  }

  getImages() {
    return [...this.products[0].images];
  }

  addItemToCart(product: Product) {
    if (this.cart.length > 0) return;
    this.cart.push(product);
  }

  removeItemFromCart() {
    if (this.cart.length == 0) return;
    this.cart.pop();
  }
}
