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
    const favoriteColor = event.target.elements.favoriteColor.value
    const height = event.target.elements.height.value
    const city = event.target.elements.city.value

    arrayUser.push({user: userName, favoriteColor, height, city}) 

    showInDom(arrayUser)
    event.target.reset()
}

function showInDom (userArr:User[]) {
    const root = document.querySelector('#userDetails')
    let html = ''

    userArr.forEach(user=> {
        html += `
            <div>
                <h2>The user name: ${user.user}</h2>
                <p> User like ${user.favoriteColor} color</p>
                <p>The height of user is ${user.height}</p>
                <p>He is living: ${user.city}</p>
            </div>
        `
    })

    root.innerHTML = html
}