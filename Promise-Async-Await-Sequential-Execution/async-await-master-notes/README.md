#### Async/await is a language structure that complements promises. It allows us to work with promises with less boilerplate.

For example, the following definitions are equivalent:

```
function f() {
    return Promise.resolve('TEST');
}

// asyncF is equivalent to f!
async function asyncF() {
    return 'TEST';
}
```

**Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function**

## Async - declares an asynchronous function (async function someName(){...}).

- Automatically transforms a regular function into a Promise.
- When called async functions resolve with whatever is returned in their body.
- Async functions enable the use of await.

## Await - pauses the execution of async functions. (var result = await someAsyncCall(); ).

- When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result.
- This will pause the async function and wait for the Promise to resolve prior to moving on.
- **Await works only with Promises, it does not work with callbacks.**
- Await can only be used inside async functions.

## Thumb Rules

- await blocks the code execution within the async function, of which it (i.e. the 'await' statement) is a part.

- There can be multiple await statements within a single async function.

- When using async await make sure to use try catch for error handling.

- If my code contains blocking code it is better to make it an async function. By doing this I am making sure that somebody else can use your function asynchronously.

- By making async functions out of blocking code, you are enabling the user who will call your function to decide on the level of asynhronicity he wants.

- await only blocks the code execution within the async function. It only makes sure that next line is executed when the promise resolves. So if an asynchronous activity has already started then await will not have an effect on it.

## Significance of Await

When we spawn a promise we can’t synchronously wait for it to finish. We can only pass a callback via then. Waiting for a promise is disallowed to encourage the development of non-blocking code. Otherwise, developers would be tempted to perform blocking operations because it’s easier than working with promises and callbacks.

However, in order to synchronise promises we need to allow them to wait for each other. In other words, if an operation is asynchronous (i.e. encapsulated in a promise) it should be able to wait for another asynchronous operation to finish. But how would the JavaScript interpreter know if an operation is running within a promise or not?

The answer is in the async keyword. Every async function returns a promise. Thus, the JavaScript interpreter knows that all operations in async functions will be encapsulated in promises and run asynchronously. Therefore, it can allow them to wait for other promises to finish.

Enter the await keyword. It can only be used in async functions, and allows us to synchronously wait on a promise. If we use promises outside of async functions we will still need to use then callbacks:

```
async function f(){
    // response will evaluate as the resolved value of the promise
    const response = await rp('http://example.com/');
    console.log(response);
}
```

## Error Handling

In most previous examples, we assumed that the promises resolve successfully. Hence, await-ing on a promise returned a value. If a promise we await for fails, this will result in an exception within the async function. We can use standard try/catch to handle it, we just need to wrap our await calls like this:

```
async function doSomethingAsync(){
    try {
        // This async call may fail.
        let result = await someAsyncCall();
    }
    catch(error) {
        // If it does we will catch the error here.
    }
}
```

**Async function without a try/catch block.**

```
async function doSomethingAsync(){
    // This async call may fail.
    let result = await someAsyncCall();
    return result;
}

// We catch the error upon calling the function.
doSomethingAsync().
    .then(successHandler)
    .catch(errorHandler);
```

It's important to choose which method of error handling you prefer and stick to it. Using both try/catch and .catch() at the same time will most probably lead to problems.

**By wrapping the logic inside an async function, we can replace the then callbacks with await statements. The effect, the code pauses execution on those lines until the Promises resolve! Asynchronous programming becomes synchronous!**

Async/Await enables us to write asynchronous code in a synchronous fashion, which produces cleaner and easier-to-understand logic. Under the hood, it’s just syntactic sugar using [generators and yield statements to “pause” execution](https://tc39.github.io/ecmascript-asyncawait/#async-function-definitions). In other words, async functions can “pull out” the value of a Promise even though it’s nested inside a callback function, giving us the ability to assign it to a variable!

##### Further Reading

1> [Official ES6 Drafts](https://tc39.github.io/ecmascript-asyncawait/#async-function-definitions)

2> [https://medium.com/siliconwat/how-javascript-async-await-works-3cab4b7d21da](https://medium.com/siliconwat/how-javascript-async-await-works-3cab4b7d21da)
