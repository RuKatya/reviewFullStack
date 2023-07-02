//------1------//
// (function () {
//     var a = b = 3;
// })();

// console.log(typeof a)
// console.log("a defined? " + (typeof a !== 'undefined')); //3 - string
// console.log("b defined? " + (typeof b !== 'undefined')); //und

// a defined? false
// b defined? true

//------2------//
// var myObject = {
//     foo: "bar",
//     func: function () {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);//bar
//         console.log("outer func:  self.foo = " + self.foo);//bar

//         (function () {
//             console.log("inner func:  this.foo = " + this.foo); //undefined
//             console.log("inner func:  self.foo = " + self.foo); //bar
//         }());
//     }
// };

// myObject.func();

//------3-----//
/* What is the significance, and what are the benefits,
of including 'use strict' at the beginning of a JavaScript source file?


1. Makes debugging easier.
2. Prevents accidental globals.
3. Eliminates *this* coercion.
4. Disallows duplicate parameter values.
5. Makes eval() safer.
6. Throws error on invalid usage of delete
*/

//------4-----//
// function foo1() { //{bar: 'hello'}
//     return {
//         bar: "hello"
//     };
// }

// function foo2() { //undefined
//     return
//     {
//         bar: "hello"
//     };
// }

// console.log(foo1())
// console.log(foo2())

//------5-----//
// console.log(0.1 + 0.2); //0.30000000000000004
// console.log(0.1 + 0.2 == 0.3); //false

//------6-----//
// console.log(sum(2, 3));   // Outputs 5
// console.log(sum(2)(3));  // Outputs 5

// function sum(x) {
//     // console.log(x)
//     if (arguments.length == 2) {
//         return arguments[0] + arguments[1]
//     } else {
//         return function (y) { return x + y; };
//     }
// }

// function sum(x, y) {
//     if (y !== undefined) {
//         return x + y;
//     } else {
//         return function (y) { return x + y; };
//     }
// }

//------7-----//
//What will the code below output
// var arr1 = "john".split('');
// // console.log(arr1) //['j', 'o', 'h', 'n']

// var arr2 = arr1.reverse();
// // console.log(arr2)//['n', 'h', 'o', 'j']

// var arr3 = "jones".split('');
// // console.log(arr3) // ['j', 'o', 'n', 'e', 's']

// arr2.push(arr3); //...arr3
// // console.log(arr2)

// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));// length = 4 slice=

// console.log(`array 1: length= ${arr1.length} last= ${arr1.slice(-1)}`);// length = 4 slice=
// // console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// //slice = (start,end) start - Required. end - Optional (Default is string length)
// const arr = "miriam"
// console.log(arr)
// const res = arr.slice(-1)
// console.log(res)

//-----8----//
// alert = הודעה קופצת רק כן
// prompt() - הודעה קופצת + הכנסה של משתנה מהלקוח
// const p = +prompt('sdf')
// console.log(p)
// confirm() - הודעה קופצת עם אופציה לתשובה של כן ולא

// console.log(1 + "2" + "2"); //122 //122
// console.log(1 + +"2" + "2"); //122 //32
// console.log(1 + -"1" + "2"); // 02 //02
// console.log(+"1" + "1" + "2"); //unde //112
// console.log("A" - "B" + "2"); //null //NaN
// console.log("A" - "B" + 2); //null //Nan

//-----9----//
// console.log("0 || 1 = " + (0 || 1)); // 1 == true
// console.log("1 || 2 = " + (1 || 2)); // 1 == true
// console.log("0 && 1 = " + (0 && 1)); // 0
// console.log("1 && 2 = " + (1 && 2)); // 2

// console.log(false == 0)
// console.log(true == 1)

//-----10----//
console.log(false == '0') //true
console.log(false === '0') //false