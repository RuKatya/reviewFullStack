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
    //console.log(ev)

    // console.log(ev.target.value)
    const inputValue = ev.target.value
    console.log(inputValue)
    // const searchArray = bookArray.filter((book) => {
    //     book.nameOfBook == inputValue
    // })
   const searchArray = bookArray.filter((book) => book.nameOfBook.includes(inputValue))

    // console.log(aaa)
    return render(searchArray)
}