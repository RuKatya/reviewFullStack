const express = require('express')
const app = express()
const PORT = process.env.PORT || 9785;

app.use(express.static('frontend/build'))
app.use(express.json())

const router = require('./routers/index')
app.use('/', router)

app.listen(PORT, () => {
    console.log(`listen on http://localhost:${PORT}`)
})