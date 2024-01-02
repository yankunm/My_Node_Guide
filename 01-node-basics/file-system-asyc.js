const fs = require('fs')

// Asynchronous make directory
fs.mkdir('./Projects', { recursive: true }, (err) => {
    console.log("In the call back.");
    if (err) throw err;
});

console.log("I AM HERE!");