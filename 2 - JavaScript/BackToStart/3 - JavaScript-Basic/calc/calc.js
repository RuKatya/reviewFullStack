// plus, minus, multiply, division

const numOne = +prompt('Enter number')
const numTwo = +prompt('Enter number')
const operator = prompt('Enter operator plus or minus or multiply or division')


const calcFunc = (numOne, numTwo, operator) => {
    switch (operator) {
        case "+":
            console.log(numOne + numTwo)
            break;
        case "-":
            console.log(numOne - numTwo)
            break;
        case "*":
            console.log(numOne * numTwo)
            break;
        case "/":
            console.log(numOne / numTwo)
            break;
        default:
            alert("The operator not include")
            break;
    } 
}

calcFunc(numOne, numTwo, operator)

