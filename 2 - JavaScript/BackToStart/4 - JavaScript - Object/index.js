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

const arrShop = [{id:1, item:"shoes", price: 12}]

const shop = {
    itemsOfShop: arrShop,
    addToItems: function() {
        this.itemsOfShop.push({id:2, item: "watch", price: 30})
        return this.itemsOfShop
    },
    removeItem: function() {
        const removed = this.itemsOfShop.filter((obj) => {
           return obj.id != 1
        })
        return removed
    }, 
    editItem: function() {
        //console.log(this.itemsOfShop)
       const itemToEdit = this.itemsOfShop.find(item=>{
           return item.id==1
       })

       const chengedItemName = "dress"
       itemToEdit.item = chengedItemName
       return itemToEdit
    }
}


// console.log(shop.removeItem())
//shop.removeItem()
console.log(shop.addToItems())

console.log(shop.editItem())


// **cuntinue the shop objec**
// create function of remove item feom the arrShop
// create function of edit item in arrshop