#### 1st Basic Implementation

```js
handleForm = async event => {
  this.setState({ isProcessing: true });
  const response = await client.sendApiRequest({
    value1: event.target.elements.field1.value,
    value2: event.target.elements.field2.value
  });
  if (response.ok) this.setState({ isProcessing: false });
};
```

the code above is totally fine. The syntactic sugar of async/await is backed by Promises which means we could also look at our code as doing something like this:

```js
handleForm = event => {
    this.setState({ isProcessing: true });
    client.sendApiRequest({
      value1: event.target.elements.field1.value,
      value2: event.target.elements.field2.value,
    }).then(response => {
      if (response.ok)
        this.setState({ isProcessing: false });
    });
  });
}
```

The first part of that promise is going to execute in what is essentially a synchronous manner. That means we are safe to pass the event values as arguments.

#### However, it’s important to recognize that this does not mean that accessing the event values anywhere in an async function is okay. Take for example what would happen if we needed access the event after the API request.

```js
handleForm = async event => {
  this.setState({ isProcessing: true });
  const response = await client.sendApiRequest({
    value1: event.target.elements.field1.value,
    value2: event.target.elements.field2.value
  });
  if (response.ok) {
    this.setState({
      isProcessing: false,
      value1: event.target.elements.field1.value,
      value2: event.target.elements.field2.value
    });
  }
};
```

### Now we’re accessing the event after the await, which is like accessing it in the .then chain of a promise. We would be accessing the event asynchronously now.

Here’s that same event written as promises again:

```js
handleForm = event => {
  return new Promise((resolve, reject) => {
    this.setState({ isProcessing: true });
    client
      .sendApiRequest({
        value1: event.target.elements.field1.value,
        value2: event.target.elements.field2.value
      })
      .then(response => {
        if (response.ok) {
          this.setState({
            isProcessing: false,
            value1: event.target.elements.field1.value,
            value2: event.target.elements.field2.value
          });
        }
      });
  });
};
```

#### Further Reading

1> https://medium.com/@ian.mundy/async-event-handlers-in-react-a1590ed24399
2> https://medium.com/@tkssharma/writing-neat-asynchronous-node-js-code-with-promises-async-await-fa8d8b0bcd7c - Very Good
