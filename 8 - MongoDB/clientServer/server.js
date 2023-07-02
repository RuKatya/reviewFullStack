const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

app.use(express.static("public"))

async function start() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log(`connected to mongoose`)
    } catch (err) {
        console.log(err)
    }
}

start()

app.use('/data', (req, res) => {
    res.send('hello from server')
})

try {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`)
    })
} catch (error) {
    console.log(error)
}