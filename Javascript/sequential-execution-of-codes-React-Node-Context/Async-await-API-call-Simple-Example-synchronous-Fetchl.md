### Transform the following code with

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

In the first line, we make a GET request to https://api.com/values/1. Instead of continuing to the next line, we wait for the request to finish, hence await. When it finishes, it passes the resolved value to the response variable.
