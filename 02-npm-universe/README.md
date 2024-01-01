# Modules and NPM

Using NPM
Installing Packages
Creating Package.json files

The most useful skills a developer must have is how to **work with modules** and packages using **the Node Package Manager** (npm).

## Working with Modules

### Module.Exports

When you write a module that you want to use in another file, you have to use `module.exports` to export the componenets from your file. `module.exports` is an object, not a function. 

If you don't export, when you import the module in your app.js file, you will get an empty object because `module.exports` is empty.

A shorter syntax is `exports`, which replaces `module.exports` if "exports" is not used else where in the file.

### Requiring Directory

`require()` just returns an object. In order to export a directory of javascript files, you have to create an `index.js` file and require/combine all objects into an array. It will act as the entry point.

## NPM Basics







