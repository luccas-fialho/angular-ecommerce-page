import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];

  constructor(private productService: ProductService) {
    this.cart = productService.cart;
  }

  ngOnInit(): void {}

  removeItemFromCart() {
    this.productService.removeItemFromCart();
  }
}
