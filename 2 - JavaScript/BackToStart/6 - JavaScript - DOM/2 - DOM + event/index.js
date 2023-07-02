// document.getElementById()
// document.querySelector()
// const header = document.getElementsByTagName("h1") // return us an object - if you want to chenge many elements in the object you need to use: for (const el of ....)
// console.log(header)

// header.forEach(el => {
//     el.innerHTML = "rheh"
// });

// header.innerText = "ergergherg"
// header.innetHTML = "ergergherg"

// for (const el of header) {
//     console.log(el)
//     el.innerText = "Hello Miriam"
// }


//------querySelector-------//
// const header = document.querySelectorAll("h1") //return us an array (NodeList(..)), to chenge many elements use: nodelist.forEach

// console.log(header)

// header.forEach(el => {
//     el.innerText = "Hi"
// })

// const root = document.getElementById("root") //get element only by id
const root = document.querySelector("#root") //the querySelector can get element by selector suck css
// const root2 = document.querySelector("div[name='hello']") //you can use attribute selector to get element that you want

// const newEl = document.createElement("p").innerText = "Miriam" //NOT CURRECT
const newEl = document.createElement("p");
newEl.innerText = "Hello"

// console.log(node)

root.appendChild(newEl)

// console.log(newEl)


