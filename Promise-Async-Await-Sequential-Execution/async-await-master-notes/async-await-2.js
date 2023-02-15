require("es6-promise").polyfill()
require("isomorphic-fetch")

const showUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")

  const users = await response.json()

  // console.log(users);

  console.log(users.filter(user => user.id === 2))
}

showUsers()

/* In order to use await, we must wrap it inside an async function to notify the JS-Engine that we are working with promises. As shown in the example, we (a)wait for two things: response and users. In effect, the code pauses execution on those lines, where I have put await until the Promises resolve! Asynchronous programming becomes synchronous!

Before we can convert the response to JSON format, we need to make sure we have the response fetched, otherwise we can end up converting a response that is not there yet, which will most likely prompt an error.

MOST IMPORTANT POINTS OF ASYNC-AWAIT
In effect, the code pauses execution on those lines, where I have put await until the Promises resolve! ASYNCHRONOUS PROGRAMMING BECOMES SYNCHRONOUS !!!!!!!

When placed in front of a Promise call, await forces the rest of the code to wait until that Promise finishes and returns a result.

Await works only with Promises, it does not work with callbacks.*/
