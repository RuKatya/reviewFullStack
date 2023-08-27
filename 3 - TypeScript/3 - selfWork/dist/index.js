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
    var color = event.target.elements.color.value;
    var phoneNumber = event.target.elements.phoneNumber.value;
    var email = event.target.elements.email.value;
    var nameVal = /[A-Z]{4,12}/i;
    var heightVal = /[0-9]/;
    var cityVal = /[A-Z]/i;
    var colorVal = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i;
    var phoneNumberVal = /^+?(972)-(5)([0-9]{1})-([0-9]{3})-([0-9]{4})$/; //+972 - 5X - XXX - XXXX
    //over this one next lesson
    var emailVal = /([A-Z 0-9][ # & ' - _ ])[.]$/i;
    //input of email and validation
    var matchName = nameVal.test(userName);
    var matchHeight = heightVal.test(height);
    var matchCity = cityVal.test(city);
    var matchColor = colorVal.test(color);
    var matchPhoneNumber = phoneNumberVal.test(phoneNumber);
    var matchEmail = emailVal.test(email);
    if (matchName && matchHeight && matchCity && matchColor && matchPhoneNumber && matchEmail) {
        arrayUser.push({ user: userName, favoriteColor: favoriteColor, height: height, city: city, color: color, phoneNumber: phoneNumber, email: email });
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
        html += "\n            <div>\n                <h2>The user name: " + user.user + "</h2>\n                <p style=\"color: " + user.favoriteColor + "; \"> User like color</p>\n                <p>The height of user is " + user.height + "</p>\n                <p>He is living: " + user.city + "</p>\n                <p style=\"color: " + user.color + "; \"> User like color</p>\n            </div>\n        ";
    });
    root.innerHTML = html;
}
