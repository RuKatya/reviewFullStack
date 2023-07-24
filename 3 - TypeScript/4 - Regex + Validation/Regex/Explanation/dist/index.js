var regex = /Ma/;
var regexOption = new RegExp(regex, 'gi');
var reg = /ip/gi;
var textToCheck = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magnam rem dicta, ipsam fugit accusamus vel itaque mollitia tempore modi quidem quis, dolor nulla facilis voluptatibus reiciendis eum asperiores recusandae?";
// console.log(regexOption)
var aa = reg.test(textToCheck); //return true or false
// console.log(aa)
var bb = textToCheck.match(reg); //return us a array or null if not exits
// console.log(bb)
if (aa) {
    console.log(bb);
}
else {
    console.log("do not the same");
}
var searchText = document.querySelector("#searchText");
var root = document.querySelector("#root");
root.innerText = "Enter text to search";
var handleSearch = function (ev) {
    var inputValue = ev.target.value;
    var checkReg = new RegExp(inputValue, 'g');
    if (inputValue.length > 0) {
        if (checkReg.test(searchText.innerText)) {
            root.innerHTML = "It Is Exist";
            searchText.style.color = "green";
        }
        else {
            root.innerHTML = "It Is Not Exist";
            searchText.style.color = "red";
        }
    }
    else {
        root.innerText = "Enter text to search";
    }
};
