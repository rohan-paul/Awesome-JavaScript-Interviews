### Understanding how Promise makes code Asynchronous / non-blocking by understanding how Fetch API works

#### Key Point - With the .then() method, we can chain our ASYNCHRONOUS calls in a SYNCHRONOUS manner. So, within the Promise block, I am converting few Asynchronous operations to Synchronous ones.

## And during that time when those Synchronous operations are getting executed, whatever is after the chain of methods inside the Promise-related block, gets executed normally without being blocked or having to wait for them, while I wait for some execution ( e.g. waiting for response from an API) to happen within the Promise’s block of codes.

https://medium.com/@wisecobbler/using-the-javascript-fetch-api-f92c756340f0

Promises allow you to write asynchronous code, so for example, when you are making a request to the server, you aren’t blocking other code from running while you are waiting for the response back from the server. This is important for the Fetch API since it’s main purpose is to make requests for assets or data. You don’t want to stop your entire application from running when making these requests.

Promise objects have a .then() method which takes two parameters — a success callback function and failure callback function. In this example, when the fetch method successfully returns from making the API request, the success callback function is called which has a Response object as it’s parameter. The Response object also has several methods available to it, one of which is a .json() method which also returns Promise. So, if you want to do anything with a response from an API request and that response is in a JSON format, you’ll need to do this:

```js
fetch("http://api.exampledomain.com/api/search")
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    //handle json data processing here
  });
```

If you’ve got multiple API requests you want to make and you want to handle the data in a specific order, or you don’t want to display anything on the screen until all the data is returned from the various API requests, you’ll be chaining quite a few .then() functions together.

Of course in the above situation I will use Promise.all() - But I get the point from above, that how .then works - i.e. it makes 2 / 3 asynchronous execution to follow a particular order.

## Use case of Promise.all()

There are few use cases where Async/Await doesn't cut it and we have to go back to Promises for help. One such scenario is when we need to make multiple independent asynchronous calls and wait for all of them to finish.

If we try and do this with async and await, the following will happen: \*/

```js
getABC = async () => {
  let A = await getValueA(); // getValueA takes 2 second to finish
  let B = await getValueB(); // getValueB takes 4 second to finish
  let C = await getValueC(); // getValueC takes 3 second to finish

  return A * B * C;
};
```

As we know, the await expression causes async function execution to pause until a Promise is resolved, that is fulfilled or rejected, and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.

Each await call will wait for the previous one to return a result. Since we are doing one call at a time the entire function will take 9 seconds from start to finish (2+4+3).

This is not an optimal solution, since the three variables A, B, and C aren't dependent on each other. In other words we don't need to know the value of A before we get B. We can get them at the same time and shave off a few seconds of waiting.

To send all requests at the same time a Promise.all() is required. This will make sure we still have all the results before continuing, but the asynchronous calls will be firing in parallel, not one after another.

```js
getABC = async () => {
  // Promise.all() allows us to send all requests at the same time. But of course, it will give me 3 independent results, from the 3 independent function invocations. From those 3 independent results, getting the final return value by applying reduce on them.

  let results = Promise.all([getValueA, getValueB, getValueC]);

  return results.reduce((total, value) => total * value);
};
```

The getValueA and getValueC calls will have already finished by the time getValueB ends. Instead of a sum of the times, we will effectively reduce the execution to the time of the slowest request (getValueB - 4 seconds).
