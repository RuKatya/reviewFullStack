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
    // string, minimum 4 charters, maximun 12. 
    var favoriteColor = event.target.elements.favoriteColor.value;
    var height = event.target.elements.height.value;
    // numbers, one digit after the dot
    var city = event.target.elements.city.value;
    //string only
    var nameVal = /[A-Z]{4,12}/i;
    var heightVal = /[0-9]/;
    var cityVal = /[A-Z]/i;
    var matchName = nameVal.test(userName);
    var matchHeight = heightVal.test(height);
    var matchCity = cityVal.test(city);
    if (matchName && matchHeight && matchCity) {
        arrayUser.push({ user: userName, favoriteColor: favoriteColor, height: height, city: city });
        showInDom(arrayUser);
        event.target.reset();
    }
    else {
        alert("Something got wrong");
    }
}
function showInDom(userArr) {
    var root = document.querySelector('#userDetails');
    var html = '';
    userArr.forEach(function (user) {
        html += "\n            <div>\n                <h2>The user name: " + user.user + "</h2>\n                <p style=\"color: " + user.favoriteColor + "; \"> User like color</p>\n                <p>The height of user is " + user.height + "</p>\n                <p>He is living: " + user.city + "</p>\n            </div>\n        ";
    });
    root.innerHTML = html;
}
