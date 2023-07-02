import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { items } from '../shoppingList';

@Component({
  selector: 'app-but-list',
  templateUrl: './but-list.component.html',
  styleUrls: ['./but-list.component.scss']
})
export class ButListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  click() {
    alert('show')
  }
}
