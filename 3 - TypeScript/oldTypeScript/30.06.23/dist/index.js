// const userInput = prompt('enter your number')
// function fun1 (sun: string):number { 
//     const number = 5
//     const math = number + parseInt(sun)
//     return math //number+10
// }
// console.log(fun1(userInput))
// ****************************
// const userInput = Number(prompt("Enter your number"))
// function fun2(numberOfUser:number):string {
// //`Hi, your number is ${numberOfUser}`
// //numberOfUser.toString()
//     return "Hi, your number is " + String(numberOfUser)//return string: "Hi, your number is: numberOfUser"
// }
// console.log(fun2(userInput))
// ****************************
// const userInput = prompt('enter your text')
// function fun3(user:string):number {
//     const word = user.length
//     return word//The lenght of the string
// }
// console.log(fun3(userInput))
// ****************************
// const userInput = prompt('enter your text')
// function fun4(song:string):string {
//     const slice = song.slice(4, 7)
//     return slice//return the text from 5 letter to 7
// }
// console.log(fun4(userInput))
// ****************************
// const userInput = prompt('enter your text')
// function fun5(pizza:string):string {
//     const word = pizza.toUpperCase()
//     return word
// }
// console.log(fun5(userInput))
// ****************************
// const userInput = prompt('enter your text')
// function fun6(space:string):string {
//     const word = space.trim()
//     return word
// }
// console.log(fun6(userInput))
// ****************************
// const arr: Array<string> = ["2", "sdfsdf", "hello"]
// const arr1: string[] = ["2", "sdfsdf", "hello"]
// const arrOfNumbers: number[] = [5, 34, 1]
// const arrOFAl: any[] = ["2", true, 3]
var userInput = prompt('enter 3 numbers with space between'); //"1 23 56"
var array = userInput.split(' '); //array of string - ["1", "23", "56"]
var arrOfNumbers = array.map(function (i) { return Number(i); }); //[1, 23, 56]
function funSome(arrOfNumber) {
    var word = arrOfNumber[0].toString();
    return "The first number is: " + word; //the first number of the array with text: The first number is: 
}
console.log(funSome(arrOfNumbers));
