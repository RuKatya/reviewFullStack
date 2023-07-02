const api = async () => {
    // const {data} = await axios.get("...") //we use async await to get the data
    // axios.get('...').then(()=>{}) //we do not need to use async - await
    // https://api.chucknorris.io/jokes/random

    // const data = await axios.get('https://api.chucknorris.io/jokes/random')
    // return data;
    axios.get('https://api.chucknorris.io/jokes/random').then(apiData => {
    const {data} = apiData
       console.log(data)
    })
}

api()

//create a function (render) that get data from api and return the jock and icon to show it in the dom

