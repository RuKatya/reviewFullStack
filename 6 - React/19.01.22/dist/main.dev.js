"use strict";

var users = [{
  name: 'moshe',
  age: 25
}, {
  name: 'david',
  age: 17
}, {
  name: 'michal',
  age: 30
}];
var adultNames = users.reduce(function (acc, user) {
  if (user.age > 18) {
    acc.push(user.name);
  }

  return acc;
}, []);
console.log(adultNames);