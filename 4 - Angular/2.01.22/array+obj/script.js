let obj1 = { name: 'Nechami', age: 12, hobbi: 'dance'}
let obj2 = { name: 'Esti', age: 9, hobbi: 'cat'}
let obj3 = { name: 'Pini', age: 6, hobbi: 'jump'}

let myArr = [ obj1, obj2, obj3 ]
console.log(myArr)

for ( let i = 0; i < myArr.length; i++ ) {
    console.log(myArr[i])
    console.log(myArr[i].name)
}

obj1.friend = [ 'Dorit', 'Liah', 'Yogev']
obj2.friend = [ 'Yamit', 'Sol', 'Orly']
obj3.friend = [ 'Chaim', 'David', 'Yogev']



for ( let i = 0; i < myArr.length; i++ ) {
    console.log(myArr[i])
    console.log(`${myArr[i].name} are friends of ${myArr[i].friend}`)
}

function family () {
    let name = prompt();
    let age = prompt();
    let hobbi = prompt();
    const obj = { name, age, hobbi }
    console.log(obj);

    myArr.push(obj);
    console.log(myArr);
}
family();
