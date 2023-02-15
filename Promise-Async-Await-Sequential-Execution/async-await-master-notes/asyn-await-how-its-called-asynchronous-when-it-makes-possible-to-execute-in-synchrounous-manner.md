async-await uses Generators to resolve and wait for Promise.

await is asynchronous in async-await, when compiler reach at await it stops executing and push everything into event queue and continue with synchronous code after async function.

```js
function first() {
  return new Promise(resolve => {
    console.log(2);
    resolve(3);
    console.log(4);
  });
}

async function f() {
  console.log(1);
  let r = await first();
  console.log(r);
}

console.log("a");
f();
console.log("b");
```

Since await is asynchronous thus every other thing before await happens as usual

a
1
2
4
b
// asynchronous happens
3
