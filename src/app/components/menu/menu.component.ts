import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() menuClicked = new EventEmitter<boolean>();
  didMenuClick:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(e: boolean) {
    console.log('clicou!', e);

    this.menuClicked.emit(e);
    this.didMenuClick = true;
  }

}
