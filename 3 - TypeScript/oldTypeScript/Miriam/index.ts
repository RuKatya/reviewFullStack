const showRandomNumber = document.querySelector("#showRandomNumber") as HTMLElement;

const sayHello = () => {
    return alert('Hello')
}

const sayHelloToUserName = (ev: Event) => {
    ev.preventDefault()

    // const userName = ev.target.elements.nameOfUser.value

    const target = ev.target as typeof ev.target & {
        nameOfUser: { value: string, id: number },
        ageOfUser: { value: number }
    }

    const username = target.nameOfUser.value
    const usernameID = target.nameOfUser.id
    const ageOfUser = target.ageOfUser.value

    console.log(username)
    console.log(usernameID)
    console.log(ageOfUser)
}

const getRandomNumber = (): number => { //parameter: number did not worked
    return Math.random()
}

const showRandomNumberFunction = () => {
    const randomNumber = getRandomNumber()
    showRandomNumber.innerHTML = randomNumber.toString()
}


