#### Q - What will be the output of the below code and why

```js
var number = 10
var display = function () {
  console.log(number)
  var number = 20
}
display()
```

#### Ans - The output of the above code is not 10 but it’s undefined

#### Explanations

This is because of hoisting in Javascript.
Hoisting is JavaScript’s default behavior of moving declarations to the top of the current scope or block.
So the above code will be converted to below code

```js
var number = 10
var display = function () {
  var number
  console.log(number)
  number = 20
}
display()
```

As you can see only the declaration is moved to the start of the function and value is not hoisted so the console.log prints undefined because number does not have any value assigned inside the function before the console.log statement.
