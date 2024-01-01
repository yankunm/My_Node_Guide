// require the math module I created from this directory
// using destructuring to get the properties I want
const { PI, square } = require('./math');

const cats = require('./shelter');

// console.log(PI);
// console.log(square);

console.log("REQUIRED AN ENTIRE DIRECTORY", cats);