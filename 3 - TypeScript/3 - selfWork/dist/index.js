// interface Task {
//     readonly id: string,
//     nameOfTask: string,
//     descriptionOfTask: string,
//     deadlineOfTheTask?: Date,
// }
var arrayUser = [];
function getUserDetails(event) {
    event.preventDefault();
    var userName = event.target.elements.userName.value;
    var favoriteColor = event.target.elements.favoriteColor.value;
    var height = event.target.elements.height.value;
    var city = event.target.elements.city.value;
    arrayUser.push({ user: userName, favoriteColor: favoriteColor, height: height, city: city });
    showInDom(arrayUser);
    event.target.reset();
}
function showInDom(userArr) {
    var root = document.querySelector('#userDetails');
    var html = '';
    userArr.forEach(function (user) {
        html += "\n            <div>\n                <h2>The user name: " + user.user + "</h2>\n                <p> User like " + user.favoriteColor + " color</p>\n                <p>The height of user is " + user.height + "</p>\n                <p>He is living: " + user.city + "</p>\n            </div>\n        ";
    });
    root.innerHTML = html;
}
