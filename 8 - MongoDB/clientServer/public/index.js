async function getData() {
    const { data } = await axios.get('/data')
    console.log(data)
}

getData()