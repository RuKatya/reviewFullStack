// const searchTerm = 'D'

// // const regexAE = /Ae/;
// const regexAE2 = new RegExp(searchTerm, 'gi')

// const string = 'dfj hksdfs JF sdfh werdfhfdh dfhae dsh gkj gjkh djkf'

// if (regexAE2.test(string)) {
//     console.log(`we have "${searchTerm}" in string`)
// } else {
//     console.log(`we dont have "${searchTerm}" in string`)
// }

// if (string.match(regexAE2)) {
//     console.log(`we have "${searchTerm}" in string`)
// } else {
//     console.log(`we dont have "${searchTerm}" in string`)
// }

// function handleSearch(ev) {
//     const searchTerm = ev.target.value;
//     const regex = new RegExp(searchTerm, 'i');
//     const root = document.querySelector('#root')
//     if (regex.test(string)) {
//         root.innerHTML = `${searchTerm} exists in string`
//         root.style.backgroundColor = 'green'
//     } else {
//         root.innerHTML = `${searchTerm} does not exist in string`;
//         root.style.backgroundColor = 'red'
//     }
// }

const myMovies = {
    Movies: [

        {
            name: "spiderman"
        },

        {
            name: "doctor strange"
        },

        {
            name: "venom"
        },

        {
            name: "spiderman 2"
        },

        {
            name: "doctor strange 2"
        },

        {
            name: "venom 2"
        },

        {
            name: "spiderman 3"
        },

        {
            name: "doctor strange 3"
        },

        {
            name: "venom 2"
        },

        {
            name: "thor 2"
        },

        {
            name: "hulk 2"
        },

        {
            name: "batman 2"
        },

        {
            name: "thor"
        },

        {
            name: "hulk"
        },

        {
            name: "batman"
        },
    ],

}

function handleSearchMovie(ev) {

    const search = ev.target.value;
    const regex = new RegExp(search, 'i');

    let root = document.querySelector('#root')

    root.innerHTML = "";

    if (search) {
        for (let i in myMovies.Movies) {
            if (regex.test(myMovies.Movies[i].name)) {
                root.innerHTML += `<p>${myMovies.Movies[i].name}</p>`
            }
        }
    }
}