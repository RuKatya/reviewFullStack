var fruitsList = [
    { name: 'Apple' },
    { name: 'Orange' },
    { name: 'strawberry' },
    { name: 'Banana' },
    { name: 'Persimmon' },
    { name: 'Avocado' }
];
var handleSubmitEvent = function (event) {
    var eventInput = event.target;
    var searchFruitText = eventInput.value;
    var regex = new RegExp(searchFruitText, 'gi');
    var root = document.querySelector('.root');
    root.innerHTML = "";
    if (searchFruitText.length > 0) {
        for (var fruit in fruitsList) {
            if (regex.test(fruitsList[fruit].name)) {
                root.innerHTML += "<p>" + fruitsList[fruit].name + "</p>";
            }
        }
    }
};
