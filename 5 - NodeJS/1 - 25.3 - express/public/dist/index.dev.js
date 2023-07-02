"use strict";

var root = document.querySelector('.root');
var dataGet = [];

function getData() {
  var html;
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch('/get-data').then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);
            dataGet = data;
          }));

        case 3:
          html = "";

          if (dataGet) {
            dataGet.map(function (dat) {
              html += "\n                    <div>\n                        <p>".concat(dat.title, "</p>\n                    </div>\n                ");
            });
            root.innerHTML = html;
          } else {
            console.log('There is no data');
          }

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
} // getData()
// const fruits = ["1", "2", "3", "4"];
// console.log(fruits)
// const a = fruits.slice(1, 3);
// console.log(a)
// console.log(fruits)
// fruits.pop();
// console.log(fruits)
// const aaa = [5, 9, 2, 4, 6, 8].at(-2)
// console.log(aaa)