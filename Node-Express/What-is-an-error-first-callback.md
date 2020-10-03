## Q. **_What is an error-first callback?_**

The pattern used across all the asynchronous methods in Node.js is called _Error-first Callback_. Here is an example:

```javascript
fs.readFile("file.json", function (err, data) {
  if (err) {
    console.error(err)
  }
  console.log(data)
})
```

Any asynchronous method expects one of the arguments to be a callback. The full callback argument list depends on the caller method, but the first argument is always an error object or null. When we go for the asynchronous method, an exception thrown during function execution cannot be detected in a try/catch statement. The event happens after the JavaScript engine leaves the try block.

In the preceding example, if any exception is thrown during the reading of the file, it lands on the callback function as the first and mandatory parameter.

<div align="right">
    <b><a href="#">↥ back to top</a></b>
</div>
