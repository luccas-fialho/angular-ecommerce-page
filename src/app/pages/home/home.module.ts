import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ProductImgsComponent } from 'src/app/components/product-imgs/product-imgs.component';
import { ProductInfosComponent } from 'src/app/components/product-infos/product-infos.component';
import { CartComponent } from 'src/app/components/cart/cart.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';
import { ImageboxComponent } from 'src/app/components/imagebox/imagebox.component';

@NgModule({
  declarations: [
    MenuComponent,
    ProductImgsComponent,
    ProductInfosComponent,
    CartComponent,
    SideBarComponent,
    ImageboxComponent,
  ],
  imports: [CommonModule,],
  exports: [
    MenuComponent,
    ProductImgsComponent,
    ProductInfosComponent,
    CartComponent,
    SideBarComponent,
    ImageboxComponent,
  ],
})
export class HomeModule {}
