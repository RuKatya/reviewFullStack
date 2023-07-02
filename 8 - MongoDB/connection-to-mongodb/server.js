const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const PORT = process.env.PORT || 1234;

mongoose.connect("mongodb+srv://Miriam-Kisos:Mykisos91@cluster0.suvhx.mongodb.net/trying", ()=>{
    console.log("DB connected")
})

const Book = new mongoose.Schema(    {
        name: String,
        author: String,
        date: Number,
        rate: Number
    } )

const newBook = new Book({
    name: "The hurd life",
    author: "silvia",
    date: 10.04,
    rate: 5
})

app.listen(PORT, () => {
    console.log(`listener on http://localhost:${PORT}`)
})