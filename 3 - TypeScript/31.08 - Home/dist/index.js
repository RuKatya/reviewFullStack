var rootEl = document.querySelector('#root');
var sortUpBtn = document.querySelector('#sortNew');
var sortDownBtn = document.querySelector('#sortOld');
var inputSearch = document.querySelector('#search');
// 1. Create an array of books (year of publish, name of book, author) - add an interface
function genUniqueId() {
    var dateStr = Date
        .now()
        .toString(36); // convert num to base 36 and stringify
    var randomStr = Math
        .random()
        .toString(36)
        .substring(2, 8); // start at index 2 to skip decimal point
    return dateStr + "-" + randomStr;
}
var bookArray = [
    {
        id: genUniqueId(),
        nameOfBook: 'Life is a difficult time',
        author: 'Hanoch Daum',
        yearOfPublish: 2007
    },
    {
        id: genUniqueId(),
        nameOfBook: 'Eternal optimism',
        author: 'Leni Ravitz',
        yearOfPublish: 2000
    },
    {
        id: genUniqueId(),
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
        html += "\n                <div>\n                    <h2>" + book.nameOfBook + "</h2>\n                    <h2>" + book.id + "</h2>\n                    <button onclick=\"showUpdateBut()\">SHOW UPDATE</button>\n                    <form id=\"updateForm\" onsubmit=\"updateName(event, '" + book.id + "')\">\n                      <input type=\"text\" name=\"newBookName\" style=\"display:none\"/>\n                      <button type=\"submit\">Update</button>\n                    </form>\n                    <button onclick=\"deleteBook('" + book.id + "')\">DELETE</button>\n                </div>\n            ";
    });
    return rootEl.innerHTML = html;
};
render(bookArray);
var updateName = function (ev, id) {
    ev.preventDefault();
    var book = bookArray.find(function (book) { return book.id == id; });
    // console.log(book)
    book.nameOfBook = ev.target.elements.newBookName.value;
    // console.log(book)
    // console.log(bookArray)
    return render(bookArray);
};
var deleteBook = function (id) {
    bookArray = bookArray.filter(function (book) { return book.id !== id; });
    // console.log(bookArray)
    return render(bookArray);
};
//do all the form in disaplay none (css) - Done
//when push on the but just the one show in dom
// 1. 
// const showHideInput = () => {
//   let inputUpdate = document.querySelector('#updateForm')
//   // const inputUpdate = event.target.elements.newBookName.value
//   if (inputUpdate.value == 1) {
//   }
// }
// 2.
// const showHideInput = () => {
//   let inputUpdate = document.querySelector('#updateForm')
//   if (inputUpdate.style.display === "none") {
//     inputUpdate.style.display = "block";
//   } else {
//     inputUpdate.style.display = "none";
//   }
// }
// ****
// const showUpdateBut = () => {
//   const updateForm = document.querySelector('#updateForm') as HTMLFormElement
//   console.log(updateForm)
//   updateForm.style.display = "none"
// }
// ****
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
    var inputValue = ev.target.value;
    var searchArray = bookArray.filter(function (book) { return book.nameOfBook.includes(inputValue); });
    return render(searchArray);
};
// create select next to the input that include aouthr name and book name
// give to the user option to find the book by one of them
// show the founded book/books in the DOM (use render function).
// 1. לעשות הוספת ספר חדש לרשימה
// 1.1. לעשות regex בזמן אמת על האינפוטים, במידה והמשתמש מכניס טקסט לא נכון
// (למשל איפה שצריך להיות מספרים מכניס טקסט
// להעיר את האינפוט בצבע אדום, במידה והטקסט נכון, האינפוט מתהפך לצבע ירוק.
var getValueInput = function (ev) {
    ev.preventDefault();
    var nameOfBook = ev.target.elements.nameOfBook.value;
    var nameVal = /[a-zA-Z]/i;
    var matchName = nameVal.test(nameOfBook);
    var authorName = ev.target.elements.authorName.value;
    var authorNameVal = /[a-zA-Z]/i;
    var matchAuthor = authorNameVal.test(authorName);
    var yearOfPublish = ev.target.elements.yearOfPublish.value;
    var yearOfPublishVal = /[0-9]/;
    var matchYear = yearOfPublishVal.test(yearOfPublish);
    if (matchName && matchAuthor && matchYear) {
        bookArray.push({ id: genUniqueId(), nameOfBook: nameOfBook, author: authorName, yearOfPublish: yearOfPublish });
        return render(bookArray);
    }
    else {
        alert('Something is not correct');
    }
};
var checkInput = function (ev) {
    try {
        var input = ev.target;
        var typeOfInput = ev.target.type;
        var valueOfInput = ev.target.value;
        var textVal = /[a-zA-Z]/i;
        var numVal = /[0-9]/;
        var check = void 0;
        if (typeOfInput == "text") {
            check = textVal.test(valueOfInput);
        }
        else if (typeOfInput == "number") {
            check = numVal.test(valueOfInput);
        }
        else {
            console.log("there is no type like this");
        }
        if (check) {
            return input.style.background = "green";
        }
        else if (valueOfInput.length == 0) {
            return input.style.background = "none";
        }
        else {
            return input.style.background = "red";
        }
    }
    catch (error) {
        console.log(error);
    }
};
/*
2. Add types of ts to:
2.1. function (what the function get in parameters and what it return),
2.2. objects,
2.3. events,
2.4. queryselectors
*/
// export default genUniqueId;
