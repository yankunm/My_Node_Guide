# Node Basics

To run a JavaScript file, you do `node file.js` in the terminal. Try executing `firstScript.js` with `node firstScript.js` in the terminal.

## Node REPL

* To get out: `ctrl-c`, `ctrl-d`, or `.exit`
* For more information: `.help`
* The global scope: `global`

## Process

`process` is an object that includes information about the current Node.js process.

Some useful Process properties and methods are: 
* process.version
* process.release
* [process.cwd()](https://nodejs.org/docs/latest/api/process.html#processcwd)
* [process.argv](https://nodejs.org/docs/latest/api/process.html#processargv) - command line arguments

## File System Module

With Node you can interact with the File System. Some common things to use are:

* **`require('fs')`** - requiring (importing) a module 
* **`mkdir(name)`/`mkdirSync(name)`** - asynchronous and synchronous (blocking the whole process) ways of making directories
* **`writeFile(file, data)` / `writeFileSync(file, data)`** - creates and writes data to file

Note: synchronous should be wrapped with try-catch statemenets













