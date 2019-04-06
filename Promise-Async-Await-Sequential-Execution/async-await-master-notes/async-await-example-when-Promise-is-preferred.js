/* There are few use cases where Async/Await doesn't cut it and we have to go back to Promises for help. One such scenario is when we need to make multiple independent asynchronous calls and wait for all of them to finish.

If we try and do this with async and await, the following will happen: */

getABC = async () => {

  let A = await getValueA();  // getValueA takes 2 second to finish
  let B = await getValueB();  // getValueB takes 4 second to finish
  let C = await getValueC();  // getValueC takes 3 second to finish

  return A * B * C
}

/* As we know, the await expression causes async function execution to pause until a Promise is resolved, that is fulfilled or rejected, and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.

Each await call will wait for the previous one to return a result. Since we are doing one call at a time the entire function will take 9 seconds from start to finish (2+4+3).

This is not an optimal solution, since the three variables A, B, and C aren't dependent on each other. In other words we don't need to know the value of A before we get B. We can get them at the same time and shave off a few seconds of waiting.

To send all requests at the same time a Promise.all() is required. This will make sure we still have all the results before continuing, but the asynchronous calls will be firing in parallel, not one after another.

*/

getABC = async () => {

  // Promise.all() allows us to send all requests at the same time. But of course, it will give me 3 independent results, from the 3 independent function invocations. From those 3 independent results, getting the final return value by applying reduce on them.

  let results = Promise.all([ getValueA, getValueB, getValueC ])

  return results.reduce((total, value) => total * value);
}

/* The getValueA and getValueC calls will have already finished by the time getValueB ends. Instead of a sum of the times, we will effectively reduce the execution to the time of the slowest request (getValueB - 4 seconds). */