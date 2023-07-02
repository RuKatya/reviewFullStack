"use strict";

function getData() {
  var _ref, data;

  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios.get('/data'));

        case 2:
          _ref = _context.sent;
          data = _ref.data;
          console.log(data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

getData();