"use strict";

var Miriam = {
  year: 1991,
  // name: "Miriam",
  age: function age() {
    return console.log("is ".concat(2022 - this));
  }
};
Miriam.age();