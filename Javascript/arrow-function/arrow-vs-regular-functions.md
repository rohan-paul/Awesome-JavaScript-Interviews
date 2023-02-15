### Arguments objects are not available in arrow functions, but are available in regular functions.

```js
let user = {
  show() {
    console.log(arguments)
  },
}
user.show(1, 2, 3) // => [Arguments] { '0': 1, '1': 2, '2': 3 }
```

But the below will print some strange output

```js
let user = {
  show_ar: () => {
    console.log(...arguments)
  },
}

user.show_ar(1, 2, 3)
```

### Can NOT Use new keyword with arrow function

Regular functions created using function declarations or expressions are ‘constructible’ and ‘callable’. Since regular functions are constructible, they can be called using the ‘new’ keyword. However, the arrow functions are only ‘callable’ and not constructible. Thus, we will get a run-time error on trying to construct a non-constructible arrow functions using the new keyword.

```js
let x = function() {
  console.log(arguments)
}
new x(1, 2, 3) // => [Arguments] { '0': 1, '1': 2, '2': 3 }
// The above will compile properly

let x = () => {
  console.log(arguments)
}
new x(1, 2, 3) // => TypeError: x is not a constructor
```
