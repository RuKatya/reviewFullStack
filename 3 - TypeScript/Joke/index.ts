const divEl = document.querySelector('#joke') as HTMLDivElement
const butEl = document.querySelector('#changeJoke') as HTMLButtonElement

// render function
const apiRender = (api) => {
    console.log(api)
    let html =
    `<h3 class="text">${api.value}</h3>
    <p class="update">${api.updated_at}</p>`;

    return divEl.innerHTML = html
}

const apiData = async () => {
    const {data} = await axios.get('https://api.chucknorris.io/jokes/random')
    // return data
    apiRender(data)
}

/*
1. get a joke from api
2. show the joke in the dom - render({})
3. crete a button that run the apiData function each click
*/



const showJokeInDom = () => {
    apiData()
}