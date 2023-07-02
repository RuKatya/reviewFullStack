function handleSend(event) {
    event.preventDefault();

    const name = event.target.elements.name.value
    const password = event.target.elements.password.value
    const number = event.target.elements.number.value
    const country_code = event.target.elements.country_code.value
    console.log(`name is ${name}`)
    console.log(`pass ${password}`)
    console.log(`num ${number}`)


}