## Name ways to manage events in an asynchronous way?

__Ans:__ First, a classic use of callback methods. Second, using Promises. Finally, in a more sophisticated way, we can use reactive extensions (RxJS) to define pipelines the manage events asynchronously

## How can you listen on port 80 with Node?

Trick question! You should not try to listen with Node on port 80 (in Unix-like systems) - to do so you would need superuser rights, but it is not a good idea to run your application with it.

Still, if you want to have your Node.js application listen on port 80, here is what you can do. Run the application on any port above 1024, then put a reverse proxy like nginx in front of it.

## Why npm shrinkwrap is useful?

This command locks down the versions of a package's dependencies so that you can control exactly which versions of each dependency will be used when your package is installed. - npmjs.com

It is useful when you are deploying your Node.js applications - with it you can be sure which versions of your dependencies are going to be deployed.

## What's a stub? Name a use case.

Stubs are functions/programs that simulate the behaviours of components/modules. Stubs provide canned answers to function calls made during test cases. Also, you can assert on with what these stubs were called.

A use-case can be a file read, when you do not want to read an actual file:

```js
var fs = require('fs');

var readFileStub = sinon.stub(fs, 'readFile', function(path, callback) {
    return callback(null, 'filecontent')
})

expect(readFileStub).to.be.called;
readFileStub(restore);

```