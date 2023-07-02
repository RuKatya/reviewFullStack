const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port = process.env.PORT || 4040;
require('dotenv').config()

app.use(express.static("public"));

app.listen(port, () => {
    console.log(color.bgBlue.white(`server listen on http://localhost:${port}`));
});