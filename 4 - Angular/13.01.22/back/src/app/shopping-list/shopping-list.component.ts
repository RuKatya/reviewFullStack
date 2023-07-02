// import { ShopList } from './../shoppingList';
import { Component, OnInit } from '@angular/core';
import { items } from '../shoppingList';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  shopList = items;

  

}
