// enum DAYLIST {
//     DAYONE=1,
//     DAYTWO = 11,
//     DAYTHREE = "Yellow",
//     DAYFOUR = 5,
//     DAYFIVE
//   }
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "female";
    Gender["MALE"] = "male";
})(Gender || (Gender = {}));
var root = document.querySelector("#root");
root.innerHTML = "\n    <select>\n        <option disabled selected>SELECT YOUR GENDER</option>\n        <option value=\"" + Gender.FEMALE + "\">" + Gender.FEMALE + "</option>\n        <option value=\"" + Gender.MALE + "\">" + Gender.MALE + "</option>\n    </select>\n";
