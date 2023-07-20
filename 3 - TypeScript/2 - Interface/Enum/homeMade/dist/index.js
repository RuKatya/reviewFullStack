var Name;
(function (Name) {
    Name["YOHAY"] = "Yohay";
    Name["DOTAN"] = "Dotan";
    Name["HOAYA"] = "Hodaya";
    Name["AYALA"] = "Ayala";
    Name["SARA"] = "Sara";
})(Name || (Name = {}));
var Age;
(function (Age) {
    Age["AGE1"] = "34";
    Age["AGE2"] = "37";
    Age["AGE3"] = "29";
    Age["AGE4"] = "33";
    Age["AGE5"] = "36";
})(Age || (Age = {}));
var City;
(function (City) {
    City["NETANYA"] = "Netanya";
    City["HAIFA"] = "Haifa";
    City["RAMATGAN"] = "Ramat Gan";
    City["HOLON"] = "Holon";
    City["BEERSHEVA"] = "Beer Sheva";
})(City || (City = {}));
var Gender;
(function (Gender) {
    Gender["FEMALEG"] = "Female";
    Gender["MALEG"] = "Male";
    Gender["OTHER"] = "Other";
})(Gender || (Gender = {}));
// const userName = document.querySelector("#name")
// console.log(userName)
// const userAge = document.querySelector("#age")
// const userCity = document.querySelector("#city")
// const userGender = document.querySelector("#gender")
// const userDetails = document.querySelector("#userDetails")
var userDetails = document.querySelector("#userDetails");
userDetails.innerHTML = "\n<form>\n    <input type=\"text\" name=\"name\" value=\"" + Name.YOHAY + "\">\n    <input type=\"text\" name=\"age\" value=\"" + Age.AGE2 + "\">\n\n    <select>\n        <option disabled selected>SELECT YOUR CITY</option>\n        <option value=\"" + City.RAMATGAN + "\">" + City.RAMATGAN + "</option>\n        <option value=\"" + City.HAIFA + "\">" + City.HAIFA + "</option>\n        <option value=\"" + City.HOLON + "\">" + City.HOLON + "</option>\n        <option value=\"" + City.BEERSHEVA + "\">" + City.BEERSHEVA + "</option>\n        <option value=\"" + City.NETANYA + "\">" + City.NETANYA + "</option>\n    </select>\n\n    <form>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.FEMALEG + "\">" + Gender.FEMALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.MALEG + "\">" + Gender.MALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.OTHER + "\">" + Gender.OTHER + "</input>\n    </form>\n</form>\n\n<form>\n    <input type=\"text\" name=\"name\" value=\"" + Name.DOTAN + "\">\n    <input type=\"text\" name=\"age\" value=\"" + Age.AGE4 + "\">\n\n    <select>\n        <option disabled selected>SELECT YOUR CITY</option>\n        <option value=\"" + City.RAMATGAN + "\">" + City.RAMATGAN + "</option>\n        <option value=\"" + City.HAIFA + "\">" + City.HAIFA + "</option>\n        <option value=\"" + City.HOLON + "\">" + City.HOLON + "</option>\n        <option value=\"" + City.BEERSHEVA + "\">" + City.BEERSHEVA + "</option>\n        <option value=\"" + City.NETANYA + "\">" + City.NETANYA + "</option>\n    </select>\n\n    <form>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.FEMALEG + "\">" + Gender.FEMALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.MALEG + "\">" + Gender.MALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.OTHER + "\">" + Gender.OTHER + "</input>\n    </form>\n</form>\n\n<form>\n    <input type=\"text\" name=\"name\" value=\"" + Name.HOAYA + "\">\n    <input type=\"text\" name=\"age\" value=\"" + Age.AGE1 + "\">\n\n    <select>\n        <option disabled selected>SELECT YOUR CITY</option>\n        <option value=\"" + City.RAMATGAN + "\">" + City.RAMATGAN + "</option>\n        <option value=\"" + City.HAIFA + "\">" + City.HAIFA + "</option>\n        <option value=\"" + City.HOLON + "\">" + City.HOLON + "</option>\n        <option value=\"" + City.BEERSHEVA + "\">" + City.BEERSHEVA + "</option>\n        <option value=\"" + City.NETANYA + "\">" + City.NETANYA + "</option>\n    </select>\n\n    <form>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.FEMALEG + "\">" + Gender.FEMALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.MALEG + "\">" + Gender.MALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.OTHER + "\">" + Gender.OTHER + "</input>\n    </form>\n</form>\n\n<form>\n    <input type=\"text\" name=\"name\" value=\"" + Name.AYALA + "\">\n    <input type=\"text\" name=\"age\" value=\"" + Age.AGE5 + "\">\n\n    <select>\n        <option disabled selected>SELECT YOUR CITY</option>\n        <option value=\"" + City.RAMATGAN + "\">" + City.RAMATGAN + "</option>\n        <option value=\"" + City.HAIFA + "\">" + City.HAIFA + "</option>\n        <option value=\"" + City.HOLON + "\">" + City.HOLON + "</option>\n        <option value=\"" + City.BEERSHEVA + "\">" + City.BEERSHEVA + "</option>\n        <option value=\"" + City.NETANYA + "\">" + City.NETANYA + "</option>\n    </select>\n\n    <form>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.FEMALEG + "\">" + Gender.FEMALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.MALEG + "\">" + Gender.MALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.OTHER + "\">" + Gender.OTHER + "</input>\n    </form>\n</form>\n\n<form>\n    <input type=\"text\" name=\"name\" value=\"" + Name.SARA + "\">\n    <input type=\"text\" name=\"age\" value=\"" + Age.AGE3 + "\">\n\n    <select>\n        <option disabled selected>SELECT YOUR CITY</option>\n        <option value=\"" + City.RAMATGAN + "\">" + City.RAMATGAN + "</option>\n        <option value=\"" + City.HAIFA + "\">" + City.HAIFA + "</option>\n        <option value=\"" + City.HOLON + "\">" + City.HOLON + "</option>\n        <option value=\"" + City.BEERSHEVA + "\">" + City.BEERSHEVA + "</option>\n        <option value=\"" + City.NETANYA + "\">" + City.NETANYA + "</option>\n    </select>\n\n    <form>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.FEMALEG + "\">" + Gender.FEMALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.MALEG + "\">" + Gender.MALEG + "</input>\n        <input type=\"radio\" name=\"gender\" value=\"" + Gender.OTHER + "\">" + Gender.OTHER + "</input>\n    </form>\n</form>\n";
