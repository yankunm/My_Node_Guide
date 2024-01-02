# Modules and NPM

The most useful skills a developer must have is how to **work with modules** and packages using **the Node Package Manager** (npm).

## Working with Modules

### Module.Exports

When you write a module that you want to use in another file, you have to use `module.exports` to export the componenets from your file. `module.exports` is an object, not a function. 

If you don't export, when you import the module in your app.js file, you will get an empty object because `module.exports` is empty.

A shorter syntax is `exports`, which replaces `module.exports` if "exports" is not used else where in the file.

### Requiring Directory

`require()` just returns an object. In order to export a directory of javascript files, you have to create an `index.js` file and require/combine all objects into an array. *`index.js` will act as the entry point for Node to look inside a folder.*

## NPM Basics

NPM is two things:
1. A library (of packages)
2. A command line tool (to install packages)

When you `node install` or `npm i` a package, it will add a `node_modules` folder, which are the dependencies that the package needs.

### Local vs Global Installation

`npm install` installs a package in the current folder/directory, it has **local scope**.

For certain packages, you can install packages globally using:
```
npm i -g <package>
```
If a package is installed globally, you have to use `npm link <package>` first before you can require it.


### Try-it-out

Some basic packages to try installing and using are:

* [Dad Jokes](https://www.npmjs.com/package/give-me-a-joke)
* [Node colorful fonts](https://www.npmjs.com/package/colors)
* [Cowsay](https://www.npmjs.com/package/cowsay)
* [Figlet](https://www.npmjs.com/package/figlet)

## Package.json

A `package.json` app is in every node app. It is **metadata**. It contains all **dependencies** that is needed for your node app. You don't need `package.json` to run properly, but you need it if others want to replicate your app.

You can create it with `npm init`.

To automatically download all dependencies required, just run `node install`.








