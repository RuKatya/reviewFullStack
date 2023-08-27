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
    city: string,
    color: string,
    phoneNumber: string,
    email: string
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
    const color = event.target.elements.color.value
    const phoneNumber = event.target.elements.phoneNumber.value
    const email = event.target.elements.email.value

    const nameVal:RegExp = /[A-Z]{4,12}/i
    const heightVal: RegExp = /[0-9]/
    const cityVal: RegExp = /[A-Z]/i
    const colorVal: RegExp = /^#?([0-9a-f]{6}|[0-9a-f]{3})$/i
    const phoneNumberVal: RegExp = /^+?(972)-(5)([0-9]{1})-([0-9]{3})-([0-9]{4})$/ //+972 - 5X - XXX - XXXX
    //over this one next lesson
    const emailVal: RegExp = /([A-Z 0-9][ # & ' - _ ])[.]$/i
    //input of email and validation

    const matchName = nameVal.test(userName)
    const matchHeight = heightVal.test(height)
    const matchCity = cityVal.test(city)
    const matchColor = colorVal.test(color)
    const matchPhoneNumber = phoneNumberVal.test(phoneNumber)
    const matchEmail = emailVal.test(email)

    if(matchName && matchHeight && matchCity && matchColor && matchPhoneNumber && matchEmail) {
        arrayUser.push({user: userName, favoriteColor, height, city, color, phoneNumber, email}) 
    
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
                <p style="color: ${user.color}; "> User like color</p>
            </div>
        `
    })

    root.innerHTML = html
}