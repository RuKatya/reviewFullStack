"use strict";

// const obj = {
//     key : value
// }
// const qweqew = 'qweqwe'
// const assa = {qweqew}
// console.log(assa)
// const child = "haha"
// const many = {
//     getMyAge: function() {
//         return this.age
//     },
//     name: "Miriam",
//     age : 32,
// }
// console.log(many.getMyAge())
var arrShop = [{
  id: 1,
  item: "shoes",
  price: 12
}];
var shop = {
  itemsOfShop: arrShop,
  addToItems: function addToItems() {
    this.itemsOfShop.push({
      id: 2,
      item: "watch",
      price: 30
    });
    return this.itemsOfShop;
  },
  removeItem: function removeItem() {
    var removed = this.itemsOfShop.filter(function (obj) {
      return obj.id != 1;
    });
    return removed;
  },
  editItem: function editItem() {
    //console.log(this.itemsOfShop)
    var itemToEdit = this.itemsOfShop.find(function (item) {
      return item.id == 1;
    });
    var chengedItemName = "dress";
    return itemToEdit;
  }
}; // console.log(shop.removeItem())
//shop.removeItem()

console.log(shop.addToItems());
console.log(shop.editItem()); // **cuntinue the shop objec**
// create function of remove item feom the arrShop
// create function of edit item in arrshop