import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @Output() closeClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  close() {
    this.closeClicked.emit(true);
  }
}
