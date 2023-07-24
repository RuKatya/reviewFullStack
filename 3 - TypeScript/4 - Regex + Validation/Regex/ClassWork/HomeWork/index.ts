interface Fruits {
    name: string
}

const fruitsList: Fruits[] = [
    { name: 'Apple'},
    { name: 'Orange'},
    { name: 'strawberry'},
    { name: 'Banana'},
    { name: 'Persimmon'},
    { name: 'Avocado'}
]

const handleSubmitEvent = (event: Event) => {
    const eventInput = event.target as typeof event.target & {
        value: string
    }

    const searchFruitText = eventInput.value

    const regex = new RegExp(searchFruitText, 'gi')
    
    let root = document.querySelector('.root') as HTMLDivElement

    root.innerHTML = ""

    if (searchFruitText.length > 0) {
        for (let fruit in fruitsList) {
            if (regex.test(fruitsList[fruit].name)) {
                root.innerHTML += `<p>${fruitsList[fruit].name}</p>`
            } 
        }
    }
}