"use strict";

var express = require('express');

var app = express();

var color = require('colors');

var port = process.env.PORT || 4040;
app.use(express["static"]("public"));
var tasks = [{
  id: "1",
  title: "one"
}, {
  id: "2",
  title: "two"
}, {
  id: "3",
  title: "three"
}, {
  id: "4",
  title: "four"
}]; // app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/public' + '/index1.html')
// })

app.get('/get-data', function (req, res) {
  res.send(tasks);
});
console.log(color.bgCyan.italic.black('Miriam'));
app.listen(port, function () {
  console.log(color.bgBlue.white("server listen on http://localhost:".concat(port)));
});