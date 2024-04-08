"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var port = process.env.PORT || 4040;

require('dotenv').config();

app.use(express["static"]("public")); //const cors = require("cors")
//const option = {}
//app.use(cors())

app.listen(port, function () {
  console.log(color.bgBlue.white("server listen on http://localhost:".concat(port)));
});