const add = (x, y) => x + y;

const PI = 3.1415926;

const square = x => x * x;

// To make contents available:

// First way: 

// const math = {
//     add: add,
//     PI: PI,
//     square: square
// }
// module.exports = math;

// Short-cut way:

exports.add = add;
exports.PI = PI;
exports.square = square;