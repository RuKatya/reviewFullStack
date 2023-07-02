const root = document.getElementById("root") //innerText, innerHTML, addElement, style, add/remove/toogle class

// const newText = "Hello little world"
// const textWithTag = `<h1>Hello</h1><p>How are you?</p>`

// document.getElementById("root").innerText = textWithTag
// document.getElementById("root").innerHTML = textWithTag

const arrOfNames = []
const addSomething = (ev) => {
    ev.preventDefault()

    const name = ev.target.elements.somesome.value
    console.log(name)

    console.log(name.length)

    if (name.length <= 2) {
        return alert("name is too short")
    }

    arrOfNames.push(name)

    console.log(arrOfNames)

    showInDom(arrOfNames)
}

const showInDom = (arr) => {
    let html = ''

    arr.forEach(el => {
        html += `
            <h2>
                ${el}
            </h2>
        `
    });

    root.innerText = html
}
