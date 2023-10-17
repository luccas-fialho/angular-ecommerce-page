import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-imgs',
  templateUrl: './product-imgs.component.html',
  styleUrls: ['./product-imgs.component.css'],
})
export class ProductImgsComponent implements OnInit {
  productImages: string[];
  imageIndex: number = 0;

  constructor(private productService: ProductService) {
    this.productImages = productService.getImages();
  }

  ngOnInit(): void {}

  nextPhoto() {
    if (this.imageIndex >= this.productImages.length - 1) this.imageIndex = 0;
    else this.imageIndex++;
  }

  previousPhoto() {
    if (this.imageIndex == 0) this.imageIndex = this.productImages.length - 1;
    else this.imageIndex--;
  }
}
