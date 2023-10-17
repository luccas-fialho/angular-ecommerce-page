import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() menuClicked = new EventEmitter<boolean>();
  didMenuClick:boolean = false;

  @Output() cartClicked = new EventEmitter<boolean>();

  toggleCart: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(e: boolean) {
    this.menuClicked.emit(e);
    this.didMenuClick = true;
  }

  openCart(e: boolean) {
    this.cartClicked.emit(e);
    this.toggleCart = !this.toggleCart;
  }

}
