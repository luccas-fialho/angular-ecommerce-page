import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/productModel';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  @Output() menuClicked = new EventEmitter<boolean>();
  didMenuClick: boolean = false;

  @Output() cartClicked = new EventEmitter<boolean>();

  cart: Product[] = [];

  toggleCart: boolean = true;

  constructor(private productService: ProductService) {
    this.cart = productService.cart;
  }

  ngOnInit(): void {}

  openSidebar(e: boolean) {
    this.menuClicked.emit(e);
    this.didMenuClick = true;
  }

  openCart(e: boolean) {
    this.cartClicked.emit(e);
    this.toggleCart = !this.toggleCart;
  }
}
