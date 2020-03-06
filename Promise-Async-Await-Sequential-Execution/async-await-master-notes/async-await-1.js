require("es6-promise").polyfill()
require("isomorphic-fetch")

/* I had to use the above packages as without it the simple fetch.('url') wont work
https://stackoverflow.com/questions/36484156/es6-fetch-is-undefined
https://www.npmjs.com/package/isomorphic-fetch   */

// APPROACH-1 PROMISE WAY >> First deal with an network request with Promise approach

getJSON = () => {
  return new Promise(resolve => {
    fetch("https://tutorialzine.com/misc/files/example.json")
      // The data from the request is available in a .then block
      // We return the result using resolve.
      .then(json => {
        resolve(json)
        console.log("Successively fetched")
      })
  })
}

getJSON() // Will fetch and then print "Successively fetched"

/* EXPLANATION OF THE ABOVE -  The Fetch API provides an interface for making network requests, returning Promises for us to resolve. To use it to get the data, I chain together a single .then() callback. The callback receives the Response object and return back its JSON data. And then console.logs it.
 */

/* REMEMBER THE FETCH SYNTAX

fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // code for handling the data I get from the API
})
.catch(function() {
    // This is where I run code if the server returns any errors
});

*/

// APPROACH-2 With async-await

// The async keyword will automatically create a new Promise and return it. Any async function returns a promise implicitly, and the resolve value of the promise will be whatever you return from the function

const getJSONAsync = async () => {
  // The await keyword saves us from having to write a .then() block.
  let json = await fetch("https://tutorialzine.com/misc/files/example.json")

  return json && console.log("Fetched with async")
}

getJSONAsync() // Will fetch and then print "Fetched with async"

/* The await expression causes async function execution to pause until a Promise is resolved, that is fulfilled or rejected, and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of the fulfilled Promise.

In effect, the code pauses execution on those lines, where I have put await until the Promises resolve! Asynchronous programming becomes synchronous!

When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result.
Await works only with Promises, it does not work with callbacks.

REMEMBER THE async-await syntax works like this -

Async arrow functions look like this:

const foo = async () => {
  // do something
}

Other than the syntax used, both functions are completely identical - they both return Promises and resolve with the JSON response from fetch().

*/
