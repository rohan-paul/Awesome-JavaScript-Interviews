### Transform the following code with sequential execution.  I want to fire second request based on one value returned by the first request.

```js
fetch("https://api.com/values/1")
  .then(response => response.json())
  .then(json => console.log(json));
```

Need to wrap it inside an async function to make the async-await mechanism work.

```js
const request = async () => {
  const response = await fetch("https://api.com/values/1");
  const json = await response.json();
  console.log(json);
};

request();
```

In the first line, we make a GET request to https://api.com/values/1. Instead of continuing to the next line, we wait for the request to finish, hence await. When it finishes, it passes the resolved value to the *response* variable.

In the second line, we get the JSON version of the response. Again, we use await so we can wait for it to complete (or fail) and then pass the result to the json variable.


#### Further Reading

https://dev.to/johnpaulada/synchronous-fetch-with-asyncawait