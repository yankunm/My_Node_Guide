const fs = require('fs')


const foldername = "Project"

try {
    // Synchronous make directory
    fs.mkdirSync(foldername);

    // Synchronous write file
    fs.writeFileSync(`${foldername}/index.html`, "");
} catch (e) {
    console.log("Something went wrongs!!");
    console.log(e);
}


console.log("I AM HERE!");