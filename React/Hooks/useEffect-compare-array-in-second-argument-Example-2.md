The Issue / Problem - Effect re-run endlessly when using an array as a second argument for useEffect which is not the case when I use the array.length instead

CodeSandbox : [codesandbox.io/s/nrwq08p9zj](codesandbox.io/s/nrwq08p9zj) (you can see that the console keeps logging into console)

Guidance on how to resolve this - This is the expected behaviour. the default behaviour of useEffect's second argument is to do a shallow equal check on what's passed in; since you're passing a new array (since getArray returns a new array instance each time) as the first element of the array (ie, it's a nested array), comparing on it will miss the cache and run the effect again. You can work around this by either making sure you pass the same instance of the array, or by passing values that can be compared shallowly in the array. eg -

```js
useEffect(() => {
  /* ... */
}, [someHashingFunction(array)]);
// we could use a hashing function (like murmur3 or md5) to generate a value to compare against
```

This also explains why it doesn't rerender when you use array.length, since it doesn't change between renders; however that is buggy, because it also means your component won't rerender when the array contents change, but with the same length. Don't do this.

#### Further Reading

- 1.  [https://github.com/facebook/react/issues/14324](https://github.com/facebook/react/issues/14324)
- 2.
