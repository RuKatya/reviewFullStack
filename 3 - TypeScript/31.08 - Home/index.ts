const rootEl = document.querySelector('#root') as HTMLDivElement;
const sortUpBtn = document.querySelector('#sortNew') as HTMLButtonElement;
const sortDownBtn = document.querySelector('#sortOld') as HTMLButtonElement;
const inputSearch = document.querySelector('#search') as HTMLInputElement;
// 1. Create an array of books (year of publish, name of book, author) - add an interface

function genUniqueId(): string {
  const dateStr = Date
    .now()
    .toString(36); // convert num to base 36 and stringify

  const randomStr = Math
    .random()
    .toString(36)
    .substring(2, 8); // start at index 2 to skip decimal point

  return `${dateStr}-${randomStr}`;
}

// console.log(genUniqueId())


interface Book {
  id: String;
  nameOfBook: String;
  author: String;
  yearOfPublish: Number;
}

type Name = string | "text"


let bookArray: Book[] = [
  {
    id: genUniqueId(),
    nameOfBook: 'Life is a difficult time', // Hachaim Hem Tkufa Kasha
    author: 'Hanoch Daum',
    yearOfPublish: 2007,
  },
  {
    id: genUniqueId(),
    nameOfBook: 'Eternal optimism', //Optimiot Nitchit
    author: 'Leni Ravitz',
    yearOfPublish: 2000,
  },
  {
    id: genUniqueId(),
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
const render = (bookArray: Array<Book>) => { // Book[]
  let html: string = '';

  bookArray.forEach((book, index) => {
    html += `
                <div>
                    <h2>${book.nameOfBook}</h2>
                    <h2>${book.id}</h2>
                    <button onclick="showHideInput(${index})">SHOW EDIT</button>
                    <form id="updateForm-${index}" onsubmit="updateName(event, '${book.id}')" style="display:none">
                      <input type="text" name="newBookName"/>
                      <button type="submit">Update</button>
                    </form>
                    <button onclick="deleteBook('${book.id}')">DELETE</button>
                </div>
            `;
  });

  return rootEl.innerHTML = html; // find the type in typescript
};

render(bookArray);


const updateName = (ev: Event, id: string) => {
  ev.preventDefault()

  const book = bookArray.find(book => book.id==id)
  // console.log(book)
  const target = ev.target as typeof ev.target & {
    newBookName: {value: String} //, id:number, index: number, 
    // yearOfPublich: { value: string}
  }

  book.nameOfBook = target.newBookName.value
  // console.log(book)
  // console.log(bookArray)
  return render(bookArray) // find the type in typescript
}

const deleteBook = (id: string) => {

  bookArray = bookArray.filter(book => book.id !== id)
  // console.log(bookArray)

  return render(bookArray) // find the type in typescript

}


//do all the form in disaplay none (css) - Done
//when push on the but just the one show in dom

/*
1. when the page is loading the form is display none
2. when we click on the btn "show edit", display of form change to display block
3. enter the new value (name of book) in the input and press "update"
4. after the name is changed, the form is return to be display none
*/

// 2.
const showHideInput = (bookIndex: number) => {
  let formEdit = document.getElementById(`updateForm-${bookIndex}`) as HTMLFormElement

  if (formEdit.style.display === "none") {
    formEdit.style.display = "block";
  } else {
    formEdit.style.display = "none";
  }
}


// 3. Create a button/two buttons that sort the list of book by the year
// (oldest and newest)

const sortUp = (bookArray: Book[]) => {
  const sortedUp = bookArray.sort((a, b) => b.yearOfPublish - a.yearOfPublish); // solve
  return render(sortedUp); // שורה 100
};

const sortDown = (bookArray: Book[]) => {
  const sorted = bookArray.sort((a, b) => a.yearOfPublish - b.yearOfPublish);// solve
  return render(sorted); // שורה 100
};

sortDownBtn.addEventListener('click', () => {
  sortDown(bookArray);
});

sortUpBtn.addEventListener("click",()=>{
    sortUp(bookArray);

})

// 4. Create an input of search by author/name of book and show the result in the DOM
// (choose which one of them to search to).

const searchFun = (ev: Event) => {
    const target = ev.target as typeof ev.target & {
      value: string
    }

    const inputValue = target.value
    const searchArray = bookArray.filter((book) => book.nameOfBook.includes(inputValue))
    return render(searchArray) // line 100
}

// create select next to the input that include aouthr name and book name
// give to the user option to find the book by one of them
// show the founded book/books in the DOM (use render function).

// 1. לעשות הוספת ספר חדש לרשימה

// 1.1. לעשות regex בזמן אמת על האינפוטים, במידה והמשתמש מכניס טקסט לא נכון
// (למשל איפה שצריך להיות מספרים מכניס טקסט
// להעיר את האינפוט בצבע אדום, במידה והטקסט נכון, האינפוט מתהפך לצבע ירוק.


const getValueInput = (ev: Event) => {
  ev.preventDefault()

  // const target = ev.target as typeof ev.target & {
  //   newBookName: {value: String} //, id:number, index: number, 
  //   // yearOfPublich: { value: string}
  // }

  const target = ev.target as typeof ev.target & {
    nameOfBook: {value: string},
    authorName: {value: string},
    yearOfPublish: {value: number}
  }

  const nameOfBook = target.nameOfBook.value
  const nameVal: RegExp = /[a-zA-Z]/i
  const matchName:  boolean = nameVal.test(nameOfBook)

  const authorName = target.authorName.value
  const authorNameVal: RegExp = /[a-zA-Z]/i
  const matchAuthor:boolean = authorNameVal.test(authorName)

  const yearOfPublish = target.yearOfPublish.value
  const yearOfPublishVal: RegExp = /[0-9]/
  const matchYear:boolean = yearOfPublishVal.test(yearOfPublish.toString())

  if (matchName && matchAuthor && matchYear) {
      bookArray.push({id: genUniqueId(), nameOfBook, author: authorName, yearOfPublish})
      return render(bookArray)
  } else {
    alert('Something is not correct')
  }

}

const checkInput = (ev: Event) =>{
  try {
    const target = ev.target as typeof ev.target & {
      type: string
      value: string
    }

    const input = ev.target
    const typeOfInput = target.type
    const valueOfInput = target.value
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
      return input.style.background = "green" //find typescript of type style
    } else if (valueOfInput.length == 0) {
      return input.style.background = "none"
    } else {
      return input.style.background = "red"
    }
  } catch (error) {
    console.log(error)
  }
}
