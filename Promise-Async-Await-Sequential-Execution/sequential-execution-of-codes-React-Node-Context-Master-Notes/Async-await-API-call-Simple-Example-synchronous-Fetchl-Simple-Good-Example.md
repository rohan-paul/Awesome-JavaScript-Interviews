### Transform the following code with sequential execution. I want to fire second request based on one value returned by the first request.

For example, the Fetch API provides an interface for making network requests, returning Promises for us to resolve. To use it to get the current weather in Long Beach, we chain together two then callbacks:

```js
fetch("https://api.com/values/1")
  .then(response => response.json())
  .then(json => console.log(json));
```

In the first, we create a callback function to receive the Response object and return back its JSON data. In the second, we create a callback that receives that data and then logs it to the console.

Need to wrap it inside an async function to make the async-await mechanism work.

```js
const request = async () => {
  const response = await fetch("https://api.com/values/1");
  const json = await response.json();
  console.log(json);
};

request();
```

In the first line, we make a GET request to https://api.com/values/1. Instead of continuing to the next line, we wait for the request to finish, hence await. When it finishes, it passes the resolved value to the _response_ variable.

In the second line, we get the JSON version of the response. Again, we use await so we can wait for it to complete (or fail) and then pass the result to the json variable.

**By wrapping the logic inside an async function, we can replace the then callbacks with await statements. The effect, the code pauses execution on those lines until the Promises resolve! Asynchronous programming becomes synchronous!**

Async/Await enables us to write asynchronous code in a synchronous fashion, which produces cleaner and easier-to-understand logic. Under the hood, it’s just syntactic sugar using [generators and yield statements to “pause” execution](https://tc39.github.io/ecmascript-asyncawait/#async-function-definitions). In other words, async functions can “pull out” the value of a Promise even though it’s nested inside a callback function, giving us the ability to assign it to a variable!

#### Further Reading

https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait
