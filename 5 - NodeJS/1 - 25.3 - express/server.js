const express = require('express');
const app = express();
const color = require('colors');
const port = process.env.PORT || 4040;

app.use(express.static("public"));

let tasks = [
    { id: "1", title: "one" },
    { id: "2", title: "two" },
    { id: "3", title: "three" },
    { id: "4", title: "four" }
]

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public' + '/index1.html')
// })

app.get('/get-data', (req, res) => {
    res.send(tasks)
})

console.log(color.bgCyan.italic.black('Miriam'))
app.listen(port, () => {
    console.log(color.bgBlue.white(`server listen on http://localhost:${port}`));
});