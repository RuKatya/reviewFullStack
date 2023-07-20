// EX 1

// const userFirstName = prompt('Enter your first name')
// const userLastName = prompt('Enter your last name')

// function hello(userFirstName:string, userLastName:string):string {
    
//     return `welcome ${userFirstName} ${userLastName}`
// }

// console.log(hello(userFirstName, userLastName))

// *************************************

// EX 2

// const celsius = Number(prompt('Enter celsius'))

// function celsiusToFahrenheit (celsius:number):number {

//     return (celsius * 1.8) + 32
// }

// console.log(celsiusToFahrenheit(celsius))

// *************************************

// const distance = Number(prompt('Enter your distance'))
// const speed = Number(prompt('Enter your speed'))

// function distanceAndSpeed (distance:number, speed:number):number {

//     return distance/speed
// }

// console.log(distanceAndSpeed(distance, speed))

// *************************************

// const A = Number(prompt('Enter number'))
// const B = Number(prompt('Enter number'))
// const C = Number(prompt('Enter number'))

// function calculateB (B:number):number {

//     return -B
// }

// console.log(calculateB(B))

// function calculateA (A:number):number {

//     return 2 * A
// }

// console.log(calculateA(A))

// // b*b - 4*a*c

// function calculateNumbers (A:number, B:number, C:number):number {

//     return (B * B) - (4 * A * C)
// }

// console.log(calculateNumbers(A, B, C))

// // (-b +_  - calculateB
// // math.sqrt((b*b) - (4*a*c))) - calculateNumbers
// // /2 * a - calculateA

// function calculatePlus (A, B, C) {
//     const one = calculateB(B)
//     const two = calculateNumbers(A, B, C)
//     const three = calculateA(A)

//     return (one + Math.sqrt(two)) / three

// }

// console.log(calculatePlus(A, B, C))

// function calculateMinus (A, B, C) {
//     const one = calculateB(B)
//     const two = calculateNumbers(A, B, C)
//     const three = calculateA(A)

//     return (one - Math.sqrt(two)) / three

// }

// console.log(calculateMinus(A, B, C))

// *************************************

// const numbersFromUser = prompt('Enter 3 random numbers with space between')

// function smallestNum (numbersFromUser) {

//     const array = numbersFromUser.split(' ')
//     console.log(array)

//     const newArray = array.map(i => Number(i))
//     console.log(newArray)

//     return Math.min(...newArray)
// }

// console.log(smallestNum(numbersFromUser))

// *************************************

// function findUserActor ():string {
//     const message = alert('Think about an actor')
    
//     const questionOne = confirm('Is he man?')

//     if (questionOne) {
//         const questionTwo = confirm('Is he blonde?')

//         if (questionTwo) {
//             return 'Philip Seymour!'
//         } else {
//             return 'Tom Cruise!'
//         }
//     } else {
//         const questionThree = confirm('Is she English?')

//         if (questionThree) {
//             return 'Keira Knightley!'
//         } else {
//             return 'Natalie Portman!'
//         }
//     }
// }

// console.log(findUserActor())

//*************************************

// const numFromUser = prompt('Enter 10 numbers with space between')

// function maxNum (numFromUser:string):number {

//     const array = numFromUser.split(' ')

//     const newArray = array.map(i => Number(i))

//     return Math.max(...newArray)
    
// }

// console.log(maxNum(numFromUser))

// function minNum (numFromUser:string):number {

//     const array = numFromUser.split(' ')

//     const newArray = array.map(i => Number(i))

//     return Math.min(...newArray)
    
// }

// console.log(minNum(numFromUser))

// function averageNum (numFromUser:string):number {

//     const array = numFromUser.split(' ')

//     const newArray = array.map(i => Number(i))

//     const average = newArray.reduce((a, b) => a + b, 0) / newArray.length
    
//     return average
// }

// console.log(averageNum(numFromUser))

// *************************************

const minNum = Number(prompt('Enter number'))
const maxNum = Number(prompt('Enter number'))

function getRandomInt (minNum:number, maxNum:number):number {

    // const calculateNum = Math.floor(Math.random() * maxNum)

    // return calculateNum

    console.log(Math.random())
    return Math.floor(Math.random() * (maxNum - minNum) + minNum)//0-1 - not include 1 -> 0.5*5 // 2.5 => 2
}
//10 - 8=2
//2+8 = 10
//0.5*10 = 5 

console.log(getRandomInt(minNum, maxNum))