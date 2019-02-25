// The below function will take a number as input and will resolve one second later with the number doubled.

doubleAfter1Second = x => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve( x * 2)
        }, 1000)
    })
}

// Note, if I just ran the below code it will not print anything, as I am NOT outputting the resolved value with a Promise
// console.log(doubleAfter1Second(2));


// The below code will output 20. So what I am doing here is - I am calling the function while passing in 10. Then, after the promise has resolved, I’ll take the returned value and log it to the console.

doubleAfter1Second(10).then((sum) => {
    console.log(sum);
  });

// Say now, I want to run a few different values through this function and add the result? Unfortunately, we cant just add our invocations together and log them:

/* let sum = doubleAfter1Second(10)
        + doubleAfter1Second(20)
        + doubleAfter1Second(30);
console.log(sum); */

// One possible solution is to set up a promise chain. To do this we’ll create a new function called addPromise. Our function will take an input value, and will return a Promise. Here’s what the boilerplate code looks like:

/* addPromise x => {
    return new Promise (resolve => {
        // resolve codes here
        resolve()
    })
} */

// Now we can add in our calls to our doubleAfter2Seconds function. Once we’re done, we can resolve with our new sum. In this example my target is to return the value of x + 2*a + 2*b + 2*c. Below is the final implementation

addPromise = x => {
    return new Promise (resolve => {
        doubleAfter1Second(10).then(a => {
            doubleAfter1Second(20).then(b => {
                doubleAfter1Second(30).then(c => {
                    resolve(x + a + b + c)
                })
            })
        })
    })
}

addPromise(10).then(summation => {
    console.log(summation)
})

// The output is 10 + (10 * 2) + (20 * 2) + (30 * 2) = 130

// Now lets see just how much easier we could write the above code with Async/Await! Remove the addPromise function, and create a new function named addAsync. This function will have the exact same purpose as our addPromise did. When you create your addPromise function, make use of the async keyword.

addAsync = async x => {
    const a = await doubleAfter1Second(10);
    const b = await doubleAfter1Second(20);
    const c = await doubleAfter1Second(30);
    return x + a + b + c
}

addAsync(10).then(sum => {
    console.log(sum)
});

// The output is 10 + (10 * 2) + (20 * 2) + (30 * 2) = 130

/* Note that, I am we’re still making use of the same doubleAfter2Seconds function.
STEPS >>

A> First we call addAsync(10) passing in the value of 10.

Next, we get the value of a . Since the await keyword is used, our function pauses for 1 second while we wait for the promise to resolve.

Once the promise resolves, a = 20.

const a = await doubleAfter2Seconds(10);

B> Next, we get the value of b . Since the await keyword is used, our function pauses for 1 second while we wait for the promise to resolve. Once the promise resolves, b = 40.

const b = await doubleAfter2Seconds(20);

C> Next, we get the value of c on line 12. Since the await keyword is used, our function pauses for 1 second while we wait for the promise to resolve. Once the promise resolves, c = 60.

const c = await doubleAfter2Seconds(30);

D> Finally, we can return the value of x + a + b + c. Since we passed in 10 as our single parameter, we are returning the value of 10 + 20 + 40 + 60.

A full 3 seconds later, our console.log(sum)is finally run. The value of 10 + 20 + 40 + 60 is passed in, and 130 is logged to the console.

************************************************
*/




/* NOTE THE SPECIAL SYNTAX OF DECLARING ASYNC WHEN USING ARROW VS GOOD OLD ES-5 FUNCTION

async function addAsync(x) {
  const res = await someAsyncFunction()
  return x;
}

addAsync = async x => {
  const res = await someAsyncFunction()
  return x;
}

*/