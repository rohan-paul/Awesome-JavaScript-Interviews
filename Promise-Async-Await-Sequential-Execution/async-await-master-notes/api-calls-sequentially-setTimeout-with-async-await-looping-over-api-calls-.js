/* Making setTimeout an async/await function. On more than one occasion I’ve wanted to wait a number of seconds in JavaScript. Normally,setTimeout() is fine for this, but what about the case when you are using async/await syntax?

And an simple example of its use, perhaps looping over some API calls but delaying a second between each (rate limiting) - So your api calls dont get blocked for hitting the API
 */
const wait = async ms => {
  return new Promise(resolve => {
    setTimeout(resolve, ms)
  })
}

// Now make the api call from an array of Uris given as arguments to the functions, after waiting 1000 ms between each
const doRequest = async uris => {
  for (let uri of uris) {
    await fetch(uri)
    await wait(1000)
  }
}

/*
The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request, whether it is successful or not.
*/
