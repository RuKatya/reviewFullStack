/*
1. create a class that include 3 values (kid, age, game) - Users
2. create 3 users by using a class Users and push them to array - new User(.....)
3. Show the users in the dom
*/

class Kid {
    constructor (name, age, game) {
        this.name = name;
        this.age = age;
        this.game = game;
    }

}


const Haim = new Kid("Haim", 7, "car")
const Lily = new Kid("Lily", 2, "doll")
const Effi = new Kid("Effi", 5, "bike")

const Kids = [];
Kids.push(Haim, Lily, Effi)
// console.log(Kids)

const body = document.querySelector('body')
const div = document.createElement('div')

Kids.forEach(element => console.log(element))


