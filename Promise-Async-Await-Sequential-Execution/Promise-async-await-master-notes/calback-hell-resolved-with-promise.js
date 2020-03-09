/* http://callbackhell.com/ explains callback hell in very good manner. It’s a situation you get into when you have to call asynchronous code with an asynchronous flow. In simple words, calling callbacks inside each other. Nothing gets broken. It will still work but it becomes messy and difficult to understand what’s going on there. Let’s take an example:

Here I defined a method named addOneTo that takes a number and returns number+1 through a callback. Meaning, that (number + 1) is passed as an argument to the callback and whatever the callback does inside it, is returned from the function as the final output.
This is a simplified example, usually, I/O or time-consuming tasks are done using callbacks. Anyways we defined this method and then called it and got the result through the callback.
*/

addOneToNum = (number, callback) => {
  let result = number + 1
  if (callback) {
    callback(result)
  }
}

addOneToNum(5, res => {
  console.log(res)
})

// Output of the above will be  5 + 1 = 6. But what if I want to add 5 times, one to 5 using the addOneTo method. Meaning the result of the first time's addition will be feeded as input for the second time's addition. Then the result of the second time's addition will be feeded as input to the third time's addition and so  on.

addOneToNum(5, res1 => {
  addOneToNum(res1, res2 => {
    addOneToNum(res2, res3 => {
      addOneToNum(res3, res4 => {
        addOneToNum(res4, res5 => {
          console.log(res5)
        })
      })
    })
  })
})

// Output will be - 5 + 1 + 1 + 1 + 1 + 1 = 10  And this is huge callback hell.

/* Now, deal with this hell with Promises. In promises, I instead of calling the callback with the result, I return a promise that I am going to get you a result in future. So define the addOneToNum method with Promise. */

addOneToNumPromise = (number, callback) => {
  let result = number + 1
  return new Promise((resolve, reject) => {
    resolve(result)
  })
}

addOneToNumPromise(5).then(res => console.log(res))
// Output  5 + 1 = 6

/* A promise is an object that is returned immediately but the result arrives later in future. Promise takes a method with two arguments, resolve and reject. resolve is called when we have a result and reject is called when we have an error. This promise object returned has two methods, then and catch. then gets the result which was raised through the resolve method. catch gets the error thrown with the reject method. Using promises we can chain our asynchronous call in a synchronous manner. */

addOneToNumPromise(5)
  .then(res1 => {
    return addOneToNumPromise(res1)
  })
  .then(res2 => {
    return addOneToNumPromise(res2)
  })
  .then(res3 => {
    return addOneToNumPromise(res3)
  })
  .then(res4 => {
    return addOneToNumPromise(res4)
  })
  .then(res5 => {
    console.log(res5)
  })

// More compact version of the above

addOneToNumPromise(5)
  .then(res1 => addOneToNumPromise(res1))
  .then(res2 => addOneToNumPromise(res2))
  .then(res3 => addOneToNumPromise(res3))
  .then(res4 => addOneToNumPromise(res4))
  .then(res5 => console.log(res5))

// Even more compact version and what a great beauty
addOneToNumPromise(5)
  .then(addOneToNumPromise)
  .then(addOneToNumPromise)
  .then(addOneToNumPromise)
  .then(addOneToNumPromise)
  .then(console.log)
