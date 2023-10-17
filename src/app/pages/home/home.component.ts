import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  opened: boolean = false;
  cartOpened: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onOpen() {
    this.opened = true;
  }

  onClose() {
    this.opened = false;
  }

  onToggleCart() {
    this.cartOpened = !this.cartOpened;
  }
}
