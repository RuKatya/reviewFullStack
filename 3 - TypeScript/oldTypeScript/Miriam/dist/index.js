var showRandomNumber = document.querySelector("#showRandomNumber");
var sayHello = function () {
    return alert('Hello');
};
var sayHelloToUserName = function (ev) {
    ev.preventDefault();
    // const userName = ev.target.elements.nameOfUser.value
    var target = ev.target;
    var username = target.nameOfUser.value;
    var usernameID = target.nameOfUser.id;
    var ageOfUser = target.ageOfUser.value;
    console.log(username);
    console.log(usernameID);
    console.log(ageOfUser);
};
var getRandomNumber = function () {
    return Math.random();
};
var showRandomNumberFunction = function () {
    var randomNumber = getRandomNumber();
    showRandomNumber.innerHTML = randomNumber.toString();
};
