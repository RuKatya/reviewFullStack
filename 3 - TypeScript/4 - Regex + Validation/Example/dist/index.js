var myMovies = [
    { name: "spiderman" },
    { name: "doctor strange" },
    { name: "venom" },
    { name: "spiderman 2" },
    { name: "doctor strange 2" },
    { name: "venom 2" },
    { name: "spiderman 3" },
    { name: "doctor strange 3" },
    { name: "venom 2" },
];
var hendleSearchMovie = function (ev) {
    var targetInput = ev.target;
    var searchMovieText = targetInput.value;
    // const idOfinput = targetInput.id
    var regex = new RegExp(searchMovieText, 'gi');
    var root = document.querySelector('#root');
    root.innerHTML = "";
    if (searchMovieText.length > 0) {
        for (var index in myMovies) {
            if (regex.test(myMovies[index].name)) {
                root.innerHTML += "<p>" + myMovies[index].name + "</p>";
            }
        }
    }
};
