// //regulr
// function exam (){

//     return;
// }

// //arrow
// const name = () => {

// }

// //anunimos
// ()=>{

// }

// //IIFE = Immediately Invoked Function Expression 
// (( num ) =>{

// //alert(num);
// })(9)

// //confirm('hello world')
// let input = prompt('window')

// if ( input == '' ){
//     alert('put string')
// } else if ( Number(input) ){
//     alert('input is number')
// } else {
//     alert('input is string')
// }

// //arry
// const dogs = [ {name: 'roki', age: 5 },
//                { name: 'chico', age: 8 },
//                { name: 'juli', age: 4 } ];

// for ( let i = 0; i < dogs.length; i++ ){
//     console.log(dogs[i])
// }

// dogs.forEach (details =>{
//     console.log(details.name)
// })

//while
// let x = 5;

// while ( x == 5 ){
//     console.log(x);
//     x++
// }


// let y = 0;
// do {
//     console.log(y) 
//     y++
// }
// while ( y == 5 )


//switch case
// const x = 10;
// const y = 20;

// switch('a') {
//     case x:
//         console.log(x)
//       break;
//     case y:
//         console.log(y)
//       break;
//     default:
//         console.log('empty')
//   }


// Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even,
// and display a message to the screen. 
// Sample Output :
"0 is even"
"1 is odd"
"2 is even"
for (let i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`)
    } else {
        console.log(`${i} is odd`)
    }
}


// Write a JavaScript program to construct the following pattern,
//using a nested for loop.
// *
// * *
// * * *
// * * * *
// * * * * *
// let string = '*';
// let i;
// let j;

// for (i = 0; i < 5; i++ ){
//     for ( j = 0; j < i; j++ ){
//         string = string + '*'
//     }
//     console.log(string)
// }



