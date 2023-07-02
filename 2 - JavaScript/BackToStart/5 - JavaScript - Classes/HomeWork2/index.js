class Product {
    constructor (price, nameofProduct, instock) {
        this.price = price;
        this.nameofProduct = nameofProduct;
        this.instock = instock;
    }

    changeInstock = (instock) => {
        if (instock == true) {
            instock = false
        } else {
            instock = true
        }

        return instock
    }

    changeNameOfProduct = (nameofProduct) => {
        const newName = prompt('Enter product name') 

        this.nameofProduct = newName

        return this.nameofProduct
    }

}

const short = new Product(25, "short", true)
const pens = new Product(50, "pens", true)
const shoes = new Product(40, "shoes", false)
const hat = new Product(20, "hat", true)

const showAllProducts = (short, pens, shoes, hat) => {
    return [short, pens, shoes, hat]
}

console.log(showAllProducts(short, pens, shoes, hat))

console.log(short.changeInstock(short.instock))
console.log(pens.changeInstock(pens.instock))
console.log(shoes.changeInstock(shoes.instock))
console.log(hat.changeInstock(hat.instock))


console.log(short.changeNameOfProduct(short.nameofProduct))

const priceLowtOHigher = (allProducts) => {
    return allProducts.sort((low, high) => {
        return low.price - high.price
    })
}

console.log(priceLowtOHigher([short, pens, shoes, hat]))



