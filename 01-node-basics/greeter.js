// greeter.js
// take in command line arguments and say hello!!
const args = process.argv.slice(2);
for (let arg of args) {
    console.log(`Hi there, ${arg}!!`);
}
