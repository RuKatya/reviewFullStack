// interface Task {
//     readonly id: string,
//     nameOfTask: string,
//     descriptionOfTask: string,
//     deadlineOfTheTask?: Date,
// }


interface User {
    user: string,
    favoriteColor: string,
    height: number,
    city: string
}

const arrayUser: User[] = []

function getUserDetails (event) {
    event.preventDefault()

    const userName = event.target.elements.userName.value
    // string, minimum 4 charters, maximun 12. 
    const favoriteColor = event.target.elements.favoriteColor.value
    const height = event.target.elements.height.value
    // numbers, one digit after the dot
    const city = event.target.elements.city.value
    //string only

    const nameVal:RegExp = /[A-Z]{4,12}/i
    const heightVal: RegExp = /[0-9]/
    const cityVal: RegExp = /[A-Z]/i

    const matchName = nameVal.test(userName)
    const matchHeight = heightVal.test(height)
    const matchCity = cityVal.test(city)

    if(matchName && matchHeight && matchCity) {
        arrayUser.push({user: userName, favoriteColor, height, city}) 
    
        showInDom(arrayUser)
        event.target.reset()
    } else {
        alert("Something got wrong")
    }
}

function showInDom (userArr:User[]) {
    const root = document.querySelector('#userDetails')
    let html = ''

    userArr.forEach(user=> {
        html += `
            <div>
                <h2>The user name: ${user.user}</h2>
                <p style="color: ${user.favoriteColor}; "> User like color</p>
                <p>The height of user is ${user.height}</p>
                <p>He is living: ${user.city}</p>
            </div>
        `
    })

    root.innerHTML = html
}