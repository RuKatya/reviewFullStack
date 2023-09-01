var rootEl = document.querySelector('#root');
var sortUpBtn = document.querySelector('#sortNew');
var sortDownBtn = document.querySelector('#sortOld');
var inputSearch = document.querySelector('#search');
var bookArray = [
    {
        nameOfBook: 'Life is a difficult time',
        author: 'Hanoch Daum',
        yearOfPublish: 2007
    },
    {
        nameOfBook: 'Eternal optimism',
        author: 'Leni Ravitz',
        yearOfPublish: 2000
    },
    {
        nameOfBook: 'The Story Of Israeli Politics',
        author: 'Amit Segal',
        yearOfPublish: 2021
    },
];
// 2. Show the array in the DOM (use foreach and innerHTML)
// var num = [7, 8, 9];
// num.forEach(function (value) {
//     console.log(value);
// });
var render = function (bookArray) {
    var html = '';
    bookArray.forEach(function (book) {
        html += "\n                <div>\n                    <h2>" + book.nameOfBook + "</h2>\n                </div>\n            ";
    });
    return rootEl.innerHTML = html;
};
render(bookArray);
// 3. Create a button/two buttons that sort the list of book by the year
// (oldest and newest)
var sortUp = function (bookArray) {
    var sortedUp = bookArray.sort(function (a, b) { return b.yearOfPublish - a.yearOfPublish; });
    return render(sortedUp);
};
var sortDown = function (bookArray) {
    var sorted = bookArray.sort(function (a, b) { return a.yearOfPublish - b.yearOfPublish; });
    return render(sorted);
};
sortDownBtn.addEventListener('click', function () {
    sortDown(bookArray);
});
sortUpBtn.addEventListener("click", function () {
    sortUp(bookArray);
});
// 4. Create an input of search by author/name of book and show the result in the DOM
// (choose which one of them to search to).
var searchFun = function (ev) {
    //console.log(ev)
    // console.log(ev.target.value)
    var inputValue = ev.target.value;
    console.log(inputValue);
    // const searchArray = bookArray.filter((book) => {
    //     book.nameOfBook == inputValue
    // })
    var searchArray = bookArray.filter(function (book) { return book.nameOfBook.includes(inputValue); });
    // console.log(aaa)
    return render(searchArray);
};
