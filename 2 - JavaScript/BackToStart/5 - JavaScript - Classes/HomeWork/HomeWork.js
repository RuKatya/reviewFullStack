// // ex1

// // class Child {
// //     constructor(name, age, grade) {
// //         this.name = name;
// //         this.age = age;
// //         this.grade = grade;
// //     }

// //     detailsOfChild () {
// //         return `name of child is ${this.name}, the age is ${this.age}, in grade ${this.grade}`
// //     }
// // }

// // const pini = new Child('Pini', 8, 'second')
// // const michael = new Child('Michael', 5, 'kinder garden')

// // console.log(pini.detailsOfChild());
// // console.log(michael.detailsOfChild());

// // document.getElementById('piniEl').innerHTML =
// // `name of child is <h1>${pini.name}</h1>,
// // the age is <h4>${pini.age}</h4>
// // and grade <p style="color: green">${pini.grade}</p>`

// // document.getElementById('michaelEl').innerHTML =
// // `name of child is <h1>${michael.name}</h1>,
// // the age is <h4>${michael.age}</h4>
// // and grade <p style="color: blue">${michael.grade}</p>`

// /*
// name - h1
// age - h4
// grade - p
// */

// // **********************************

// // ex2

// // const rotemCohen = new Celleb('Rotem Cohen', 'Rotem-Cohen', '5000') 
// // rotemCohen.updateNumOfFollowers(9874)
// //need to include in class function that update the amount of followers
// //need to unclude in class function that show the amount of followers


// // 1. create a class of celebs with properties:
// // name, genre, account in TikTok, account in Instagram, and the number of followers.

class Celeb {
    constructor(name, gender, tikTokAccount, instegramAccount, numOfFollower) {
        this.name = name;
        this.gender = gender;
        this.tikTokAccount = tikTokAccount;
        this.instegramAccount = instegramAccount;
        this.numOfFollower = numOfFollower;

    // console.log(`${this.name} has ${this.numOfFollower} followers`)
    }

    amountFollower() {
        return console.log('hy');
    }

    // followersAmount () {
    //     return console.log(`${this.name} has ${this.numOfFollower} followers`); 
    // }

    // 2. based on question number one,
    // create a method to set the number of followers and another method to get the number of followers.
    // Create a few celebs-objects, and set the number of followers.
    // Write to the console each celeb TikTok account.
     
    
    supdateFollowersAmount = (followerNumbers) => {
        return this.numOfFollower = followerNumbers
    }

    showNumberOfFollow = () => {
        return `the number is ${this.numOfFollower}`
    }
}


const shiriMaimon = new Celeb('Shiri Maimon', 'Female', 'shirimaimon1', 'shiri-maimon', 40000)
const ravivKaner = new Celeb('Raviv Kaner', 'Male', 'ravivkaner', 'raviv-kaner', 100000)
// console.log(ravivKaner);
const yehoramGaon = new Celeb('Yehoram Gaon', 'Male', 'yehoramgaon', 'yehoram-gaon', 70000)
const kerenPeles = new Celeb('Keren Peles', 'Female', 'kerenpeles', 'keren-peles', 120000)
// // console.log(shiriMaimon, ravivKaner, yehoramGaon, kerenPeles)

// document.getElementById('cellebs').innerHTML = `The celeb ${shiriMaimon.name}
// she is ${shiriMaimon.gender} 
// and her tiktok account is ${shiriMaimon.tikTokAccount} 
// her instegram account is ${shiriMaimon.instegramAccount} 
// her number of followers ${shiriMaimon.numOfFollower}`


// const setNumberOfFollower = prompt('Enter num of follower')
// ravivKaner.supdateFollowersAmount(setNumberOfFollower)
// console.log(ravivKaner.showNumberOfFollow())
// console.log(shiriMaimon.showNumberOfFollow())



// 3. create a function that gets all the celebs and returns the celeb with the most followers. 

// const cellebFunc = (shiri, raviv, yoram, keren) => {
//     return Math.max(shiri, raviv, yoram, keren)
// }

// console.log(cellebFunc(shiriMaimon.numOfFollower, ravivKaner.numOfFollower, yehoramGaon.numOfFollower, kerenPeles.numOfFollower))

// // 4. return a list of celebs, ordered by their number of followers

const sortCeleb = (allUsers) => {

    return allUsers.sort((a,b) => a.numOfFollower - b.numOfFollower)
    // return allUsers.sort((a,b) => {if(a.numOfFollower > b.numOfFollower) return -1})
}

console.log(sortCeleb([shiriMaimon, ravivKaner, yehoramGaon, kerenPeles]))




// ****************************************
// const obj = {
//     firstname: "Miriam",
//     age: 30,
//     updateAge: (userAge) => {
//         return this.age = userAge
//     },
//     showAge:() => {
//         return `user age ${this.age}`
//     }
// }

// const obj2 = {
//     firstname: "Katya",
//     age: 30
// }

// const showBeforeChange = (userObj) => {
//     return `user before is ${userObj.firstname} and age ${userObj.age}`
// }

// console.log(showBeforeChange(obj))

// const getAgeFromClient = prompt("Enter Age")

// console.log(obj.updateAge(getAgeFromClient))
// console.log(obj.showAge())
// ****************************************