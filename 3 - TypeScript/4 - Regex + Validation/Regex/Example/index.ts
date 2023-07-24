interface Movies {
    name: string
}
const myMovies: Movies[] = [
    { name: "spiderman" },
    { name: "doctor strange" },
    { name: "venom" },
    { name: "spiderman 2" },
    { name: "doctor strange 2" },
    { name: "venom 2" },
    { name: "spiderman 3" },
    { name: "doctor strange 3" },
    { name: "venom 2" },
]

const hendleSearchMovie = (ev: Event) => {
    const targetInput = ev.target as typeof ev.target & {
        value: string,
        // id: string
    }

    const searchMovieText = targetInput.value
    // const idOfinput = targetInput.id
    const regex = new RegExp(searchMovieText, 'gi');

    let root = document.querySelector('#root') as HTMLDivElement

    root.innerHTML = "";

    if (searchMovieText.length > 0) {
        for (let index in myMovies) {
            if (regex.test(myMovies[index].name)) {
                root.innerHTML += `<p>${myMovies[index].name}</p>`
            }
        }
    }

}