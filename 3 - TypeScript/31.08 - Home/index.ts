const rootEl = document.querySelector('#root');
const sortUpBtn = document.querySelector('#sortNew') as HTMLButtonElement;
const sortDownBtn = document.querySelector('#sortOld') as HTMLButtonElement;
const inputSearch = document.querySelector('#search')
// 1. Create an array of books (year of publish, name of book, author) - add an interface

interface Book {
  nameOfBook: String;
  author: String;
  yearOfPublish: Number;
}

const bookArray: Book[] = [
  {
    nameOfBook: 'Life is a difficult time', // Hachaim Hem Tkufa Kasha
    author: 'Hanoch Daum',
    yearOfPublish: 2007,
  },
  {
    nameOfBook: 'Eternal optimism', //Optimiot Nitchit
    author: 'Leni Ravitz',
    yearOfPublish: 2000,
  },
  {
    nameOfBook: 'The Story Of Israeli Politics', //Sipora Shel Hapolitika Hisraelit
    author: 'Amit Segal',
    yearOfPublish: 2021,
  },
];

// 2. Show the array in the DOM (use foreach and innerHTML)

// var num = [7, 8, 9];
// num.forEach(function (value) {
//     console.log(value);
// });
const render = (bookArray) => {
  let html: string = '';

  bookArray.forEach((book) => {
    html += `
                <div>
                    <h2>${book.nameOfBook}</h2>
                </div>
            `;
  });

  return rootEl.innerHTML = html;
};

render(bookArray);

// 3. Create a button/two buttons that sort the list of book by the year
// (oldest and newest)

const sortUp = (bookArray) => {
  const sortedUp = bookArray.sort((a, b) => b.yearOfPublish - a.yearOfPublish);
  return render(sortedUp);
};

const sortDown = (bookArray) => {
  const sorted = bookArray.sort((a, b) => a.yearOfPublish - b.yearOfPublish);
  return render(sorted);
};

sortDownBtn.addEventListener('click', () => {
  sortDown(bookArray);
});

sortUpBtn.addEventListener("click",()=>{
    sortUp(bookArray);

})

// 4. Create an input of search by author/name of book and show the result in the DOM
// (choose which one of them to search to).

const searchFun = (ev) => {
    const inputValue = ev.target.value
    const searchArray = bookArray.filter((book) => book.nameOfBook.includes(inputValue))
    return render(searchArray)
}

// create select next to the input that include aouthr name and book name
// give to the user option to find the book by one of them
// show the founded book/books in the DOM (use render function).

// 1. לעשות הוספת ספר חדש לרשימה

// 1.1. לעשות regex בזמן אמת על האינפוטים, במידה והמשתמש מכניס טקסט לא נכון
// (למשל איפה שצריך להיות מספרים מכניס טקסט
// להעיר את האינפוט בצבע אדום, במידה והטקסט נכון, האינפוט מתהפך לצבע ירוק.


const getValueInput = (ev) => {
  ev.preventDefault()

  const nameOfBook = ev.target.elements.nameOfBook.value
  const nameVal: RegExp = /[a-zA-Z]/i
  const matchName = nameVal.test(nameOfBook)

  const authorName = ev.target.elements.authorName.value
  const authorNameVal: RegExp = /[a-zA-Z]/i
  const matchAuthor = authorNameVal.test(authorName)

  const yearOfPublish = ev.target.elements.yearOfPublish.value
  const yearOfPublishVal: RegExp = /[0-9]/
  const matchYear = yearOfPublishVal.test(yearOfPublish)

  if (matchName && matchAuthor && matchYear) {
      bookArray.push({nameOfBook, author: authorName, yearOfPublish})
      return render(bookArray)
  } else {
    alert('Something is not correct')
  }

}

const checkInput = (ev) =>{
  try {
    const input = ev.target
    const typeOfInput = ev.target.type
    const valueOfInput = ev.target.value
    const textVal: RegExp = /[a-zA-Z]/i
    const numVal: RegExp = /[0-9]/

    let check 
    if(typeOfInput == "text") {
      check = textVal.test(valueOfInput)
    } else if (typeOfInput == "number") {
      check = numVal.test(valueOfInput)
    } else {
      console.log(`there is no type like this`)
    }

    if(check) {
      return input.style.background = "green"
    } else if (valueOfInput.length == 0) {
      return input.style.background = "none"
    } else {
      return input.style.background = "red"
    }
  } catch (error) {
    console.log(error)
  }
}

/* 
2. Add types of ts to:
2.1. function (what the function get in parameters and what it return), 
2.2. objects, 
2.3. events, 
2.4. queryselectors
*/