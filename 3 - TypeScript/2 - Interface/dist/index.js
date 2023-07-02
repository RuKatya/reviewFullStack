function fun1(parameter) {
    return 5;
}
function fun2() {
    return true;
}
var miriam = {
    id: "123",
    userName: "Miriam",
    age: 18
};
console.log(miriam);
miriam.userName = "Katya";
// miriam.id = "987987"
console.log(miriam);
// --------------------------------
var usersArray1 = [];
var usersArray2 = [{ id: "987", userName: "Katya", age: 15 }];
// --------------------------------
function getUserName(human) {
    return "The name is " + human.userName;
}
console.log(getUserName({ id: "321", userName: "werwer", age: 80 })); //important to send an object
// --------------------------------
function getSomething(wedonotknowwhat) {
    console.log("werwer");
}
