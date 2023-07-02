const sellers = [
{
    nameOfBuyer: "Oz",
    title: "pence",
    price: "25$"
},
{
    nameOfBuyer: "Natan",
    title: "watch",
    price: "350$"
},
{
    nameOfBuyer: "Chaim",
    title: "book",
    price: "50$"
}
] 


const funcItem = (sellers) => {
    const searchByTitle = prompt("enter your item name")

    const items = sellers.filter((item) => item.title.toLowerCase() == searchByTitle.toLowerCase())

    console.log(items)
}

funcItem(sellers)

// const item = [
//     {nameOfBuyer: prompt('enter your name')},
//     {item: prompt('enter your price')},
//     {price: prompt('name of item')}
// ] 