import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-infos',
  templateUrl: './product-infos.component.html',
  styleUrls: ['./product-infos.component.css'],
})
export class ProductInfosComponent implements OnInit {
  product: Product;

  quantity: number = 0;

  constructor(private productService: ProductService) {
    this.product = productService.getProduct(0);
  }

  ngOnInit(): void {}

  addQuantity() {
    this.productService.setQuantity(0, 1);
  }

  subtractQuantity() {
    this.productService.setQuantity(0, -1);
  }

  addItemToCart() {
    this.productService.addItemToCart(this.product);
  }
}
