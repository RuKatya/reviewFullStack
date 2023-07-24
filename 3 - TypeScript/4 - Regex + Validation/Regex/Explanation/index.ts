const regex: RegExp = /Ma/
const regexOption = new RegExp(regex, 'gi')
const reg = /ip/gi

const textToCheck = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus magnam rem dicta, ipsam fugit accusamus vel itaque mollitia tempore modi quidem quis, dolor nulla facilis voluptatibus reiciendis eum asperiores recusandae?"

// console.log(regexOption)

const aa = reg.test(textToCheck) //return true or false

// console.log(aa)

const bb = textToCheck.match(reg) //return us a array or null if not exits

// console.log(bb)

if (aa) {
    console.log(bb)
} else {
    console.log(`do not the same`)
}

const searchText = document.querySelector("#searchText") as HTMLParagraphElement
const root = document.querySelector("#root") as HTMLDivElement

root.innerText = "Enter text to search"

const handleSearch = (ev) => {
    const inputValue = ev.target.value
    const checkReg = new RegExp(inputValue, 'g')

    if (inputValue.length > 0) {
        if (checkReg.test(searchText.innerText)) {
            root.innerHTML = "It Is Exist"
            searchText.style.color = "green"
        } else {
            root.innerHTML = "It Is Not Exist"
            searchText.style.color = "red"
        }
    } else {
        root.innerText = "Enter text to search"
    }

}

