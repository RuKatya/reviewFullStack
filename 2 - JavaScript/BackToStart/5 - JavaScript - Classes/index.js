class Human {
    constructor(age, name, hobbie) {
        this.age = age;
        this.name = name;
        this.hobbie = hobbie;
    }

    showUserName() {
        return this.name
    }
}

const miriam = new Human(32, "Miriam", "Sport")
console.log(miriam)

console.log(miriam.showUserName())

// class User extends Human {
//     constructor(placeOfStudy, endYear) {
//         this.placeOfStudy = placeOfStudy;
//         this.endYear = endYear;
//     }
// }

// const katya = new User("INT", 2021, 30, "katya", "sleep")
// console.log(katya)

