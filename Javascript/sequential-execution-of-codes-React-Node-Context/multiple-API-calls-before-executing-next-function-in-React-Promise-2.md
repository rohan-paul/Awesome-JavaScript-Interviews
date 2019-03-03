Lets say I have this

```js
this.getList();
this.getServers();
this.getCredentials();
console.log("waited");
```

### What would be a way to console.log only after the other 3 finished? and those 3 are actually API calls.

Solution -

```js
Promise.all([this.getList(), this.getServers(), this.getCredentials()]).then(
  () => console.log("waited")
);
```
