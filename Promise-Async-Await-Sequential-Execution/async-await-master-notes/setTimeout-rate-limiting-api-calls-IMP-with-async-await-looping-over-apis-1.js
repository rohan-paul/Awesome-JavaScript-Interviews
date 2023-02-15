const axios = require("axios")
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
    let response = await axios.get(uri)
    console.log(response.data)
    const ms = 300 * uris.indexOf(uri)
    console.log(uris.indexOf(uri))
    await wait(ms)
  }
}

const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
]

doRequest(urls)

/*
OUTPUT :-

{ userId: 1,
  id: 1,
  title:
   'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body:
   'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' }

{ userId: 1,
  id: 2,
  title: 'qui est esse',
  body:
   'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' }
*/
