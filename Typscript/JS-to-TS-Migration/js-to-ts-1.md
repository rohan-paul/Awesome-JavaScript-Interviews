Normally, we can put normal JS code and get no help from what TypeScript has to offer. In order to TS to force us to actually type our code, we need to change the ‘tsconfig.json’ file. In particular, we will focus on two compiler options that will force our code to be actually typed:

```js
"noImplicitAny": true,
"strictNullChecks": true,
```

Let’s imagine we have a simple mortgage simulator that tells the user if, given his financial situation, a mortgage is viable or not. For that, we will have a function that will retrieve somehow the savings user has:

```js
function getSavings() {
  //returns savings
}

// And a function to decide if a mortgage is feasible:

function concedeMortgage(homeValue) {
  const savings = getSavings()
  return savings / homeValue > 0.2
}
```

But, to make it actually work, we would need to check if the input exists. And also if it’s a number or not. The same applies for the return value from `getSavings`, since he don’t know what is the return type of that function. Therefore, our code could end up looking something like this:

```js
function concedeMortgage(homeValue) {
  if (!homeValue || !parseFloat(homeValue)) return false
  const savings = getSavings()
  if (!savings || !parseFloat(savings)) return false
  return savings / homeValue > 0.2
}
```

Which looks quite terrible.

But, if we activate the `noImplicitAny` compiler option, it would be no longer necessary to check if the input value and the return from `getSavings` are of type of number, so the function could look something like this:

```js
function concedeMortgage(homeValue: number): boolean {
  if (!homeValue) return false
  const savings = getSavings()
  if (!savings) return false
  return savings / homeValue > 0.2
}
```

Which is an improvement, since the compiler would help us to avoid some mistakes and typos, not allowing us calling the function with a string, per example:

```js
concedeMortgage("foo") // ERROR! Argument of type 'foo' is not assignable to parameter type 'number'
```

Unfortunately, null and undefined are still in the domain of every type, therefore it would be possible to do this:

```js
concedeMortgage(null) // Still works
```

To fix that, we need activate the other option in the tsconfig.json file we mentioned: ‘strictNullChecks’.

Now, doing the call to the function with null, would end up caught by the compiler:

```js
concedeMortgage(null) // ERROR! Argument of type 'null' is not assignable to parameter of type 'number'
```

That meaning, the check of null values is not needed by code, simplifying the logic to something like:

```js
function concedeMortgage(homeValue: number): boolean {
  const savings = getSavings()
  return savings / homeValue > 0.2
}
```

This is just a small glance at what TypeScript can give you if you migrate your project from plain JS to it.

### Further Reading

[https://apiumhub.com/tech-blog-barcelona/migrate-javascript-to-typescript/](https://apiumhub.com/tech-blog-barcelona/migrate-javascript-to-typescript/)
