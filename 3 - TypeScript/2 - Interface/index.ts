function fun1(parameter: string): number {
    return 5
}

function fun2(): boolean {
    return true
}

interface Human {
    readonly id: string
    userName: string,
    age: number,
    hobbies?: boolean,
    getAddressOptionOne?: () => string,
    // getAddress(): string
}

const miriam: Human = {
    id: "123",
    userName: "Miriam",
    age: 18,
    // getAddress: () => {
    //     return "654"
    // }
}
console.log(miriam)

miriam.userName = "Katya"
// miriam.id = "987987"

console.log(miriam)

// --------------------------------
const usersArray1: Human[] = []
const usersArray2: Array<Human> = [{ id: "987", userName: "Katya", age: 15 }]

// --------------------------------
function getUserName(human: Human): string {
    return `The name is ${human.userName}`
}

console.log(getUserName({ id: "321", userName: "werwer", age: 80 })) //important to send an object
// --------------------------------
function getSomething(wedonotknowwhat: any): void {
    console.log("werwer")
}
