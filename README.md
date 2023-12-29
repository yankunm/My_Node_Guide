# Yankun's Node Guide

[The Official Node.js Documentation](https://nodejs.org/docs/latest/api/documentation.html)

**Node.js** is a JavaScript runtime. **ECMAScript** (first appeared 1997) is the standard that browsers implement so we can write JS in browser. 

In this guide we explore the basics of Node.

#### Client-Side vs Server-Side JavaScript

**Node is an implementation of JavaScript that runs outside of the browser**. When we write JS in browser, we are writing *client-side JavaScript*. We can now write *server-side JavaScript*, apps that not only work in browser but works **natively**. **NASA** use node, **Netflix** use node, **Uber** use node, almost everyone use node, so it is important to master it.

With Node, we can build:
* Web Servers
* Command Line Tools
* Native Apps (e.g. VSCode, Slack)
* Video Games (e.g. Cross-Code)
* Control drones, electric cars

Node is JavaScript, however it does not have browser stuff like window, document, DOM API, etc.

#### Installation 

[Official Website](https://nodejs.org/en)

Type `node` in terminal to make sure you installed it.

## Node Basics

To run a JavaScript file, you do `node file.js` in the terminal. Try executing `firstScript.js` with `node firstScript.js` in the terminal.

### Node REPL

* To get out: `ctrl-c`, `ctrl-d`, or `.exit`
* For more information: `.help`
* The global scope: `global`

### Process

`process` is an object that includes information about the current Node.js process.

Some useful Process properties and methods are: 
* process.version
* process.release
* [process.cwd()](https://nodejs.org/docs/latest/api/process.html#processcwd)
* [process.argv](https://nodejs.org/docs/latest/api/process.html#processargv) - command line arguments

### File System Module












