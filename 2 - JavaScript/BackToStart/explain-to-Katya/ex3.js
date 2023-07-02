// const numFromUser = prompt("Enter a number")

// const negativeNum = (numFromUser) => {
//     if (numFromUser > 0) {
//         return console.log(numFromUser * -1)
//     } else {
//         return console.log(numFromUser * -1)
//     }
// }

// negativeNum(numFromUser);

// *******************

// const x = prompt('Enter number 1')
// const y = prompt('Enter number 2')

// const multiFun = (x, y) => {

//     return console.log(x * y)
// }

// multiFun(x, y)


// *******************

// const numFromUser = prompt("Enter a number")

// const sqaureFun = (numFromUser) => {

//     return console.log(Math.sqrt(numFromUser)) 
// }

// sqaureFun(numFromUser)


// *******************

// const numFromUser = prompt("Enter a number") 

// const weatherFun = (numFromUser) => {

//     // * 1.8 + 32

//     return console.log((numFromUser * 1.8) + 32)
// }

// weatherFun(numFromUser)


// *******************

// const numFromUser = prompt("Enter a number")

// const checkNum = (numFromUser) => {
//     if (numFromUser % 2 == 0) {
//         return console.log('The number is even')
//     } else {
//         return console.log('The number is odd')
//     }
// }

// checkNum(numFromUser)


// *******************

// const x = prompt('Enter number 1')
// const y = prompt('Enter number 2')

// const largeNum = (x, y) => {

//     return console.log(Math.max(x, y))
// }

// largeNum(x, y)


// *******************

// const numFromUser = prompt("Enter a number")

// const reverseFun = (numFromUser) => {

//     return console.log(numFromUser.split('').reverse().join(''))
// }

// reverseFun(numFromUser)


// *******************

// const lenght = prompt('Enter the lenght of the room')
// const width = prompt('Enter the width of the room')
// const height = prompt('Enter the height of the room')

// const roomArea = (lenght, width, height) => {
//     return console.log(`The volume of the room is ${lenght * width * height}`)
// }

// roomArea(lenght, width, height)


// *******************

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const wordFromUser = prompt('Enter your word')

const wordToNumber = (array, wordFromUser) => {
    const word = wordFromUser.toLowerCase().split('')

    console.log(word.length)
    console.log(word)

    const arrayOfnumber = []

    for (let i = 0; i < word.length; i++) {
        if (array.includes(word[i])) {
            arrayOfnumber.push(array.indexOf(word[i]) + 1)
        }
    }

    console.log(arrayOfnumber)
    console.log(arrayOfnumber.toString())
    console.log(arrayOfnumber.join('*-*'))



}

wordToNumber(array, wordFromUser)















