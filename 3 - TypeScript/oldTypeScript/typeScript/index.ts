// -------TYPES-------
// let firstName = "katya";
// firstName = 1; //We cant put number in string

// let secondName = 1;
// secondName = "thrth"; //We cant put string in number

// let one: string
// one = "tralala"
// one = 1

// let two: string | number
// two = "string"
// console.log(two)
// two = 12
// console.log(two)

// let year: number | null | "Null"
// year = 3
// year = null
// year ="Null"
// year = undefined; //whill back us error

// let any: any
// any = 1
// any = "string"
// any = true

// ----ENUM------
// enum users {
//     Miriam = 30,
//     Katya = 28,
//     UncleBob = 60
// }

// users.Miriam

//-----OBJ-----
// const user: {
//     name: string
//     age: number
//     country: string
//     hobbies?: string
// } = {
//     name: "Miriam",
//     age: 30,
//     country: "Israel",
//     // hobbies: 23
// }

// console.log(user.country)

// -------ARRAY------
// const names = ["One", "Two", "Three"]
// const names = ["One", "Two", "Three",1]
// const names: string[] = ["One", "Two", "Three"]
// const names1: Array<string> = ["One", "Two", "Three"]

// const numnum: number[] = [1, 2, 3]

// // names.push(1)
// numnum.push(4)
// console.log(numnum)

// const all: (number | string)[] = ["katya", "Miriam", 3, 5, undefined]
// const all1: any[] = ["katya", "Miriam", 3, 5, undefined]

// -----Function-----
// function plus(x: number, y: number): string {
//     let a = x + y
//     return `${a} yeyy`
// }

// console.log(plus(1, 2))

// function nothing(): void {
//     // return 2 //will error
//     2
// }

// // --------INTERFACE--------
// type info = {
//     weigth: number,
//     color: string
// }

// interface Product extends ProductReview {
//     name: string
//     price: number
//     image: string
//     info?: info
// }

// interface ProductReview {
//     reviews?: string[]
// }

// const appleReview: ProductReview = {

// }

// const apple: Product = {
//     name: "apple",
//     price: 12,
//     image: "string"
// }

// let mango:Product = {} as Product

//-------Generic --------

const getArray = <T>(item: T[]): T[] => {
    return [...item]
}

const numArray = getArray<number>([1, 2, 3])

function getArray1<T>(item: T[]): T[] {
    return [...item]
}

const numArray1 = getArray<number>([1, 2, 5, 2])

console.log(numArray)
