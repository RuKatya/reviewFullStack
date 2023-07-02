"use strict";

var express = require('express');

var app = express();

var mongoose = require('mongoose');

var PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(express["static"]("public"));

function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(process.env.DB_URL));

        case 3:
          console.log("connected to mongoose");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}

start();
app.use('/data', function (req, res) {
  res.send('hello from server');
});

try {
  app.listen(PORT, function () {
    console.log("http://localhost:".concat(PORT));
  });
} catch (error) {
  console.log(error);
}