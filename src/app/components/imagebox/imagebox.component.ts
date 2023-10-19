import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-imagebox',
  templateUrl: './imagebox.component.html',
  styleUrls: ['./imagebox.component.css']
})
export class ImageboxComponent implements OnInit {

  images: string[] = [];
  imageIndex: number = 0;

  @Output() closedModal = new EventEmitter<boolean>();

  constructor(private productService: ProductService) {
    this.images = productService.getImages();
  }

  ngOnInit(): void {
  }

  selectedImage(index: number) {
    if(index < 0) index = 3;
    this.imageIndex = index % 4;
  }

  imageCarrousel(e:string) {
    e == 'next' ? this.selectedImage(this.imageIndex+1) : this.selectedImage(this.imageIndex-1)
  }

  closeModal(e: boolean) {
    this.closedModal.emit(e);
  }

}
