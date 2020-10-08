#### Q - What will be the output of the below code and why

```js
const number = 1
const result = (function (number) {
  delete number
  return number
})(10)
console.log(result)
```

#### Ans - The output of the above code is 10

#### Explanations

In this code, we are passing the value 10 as the input to the function. But again inside the function number is just a local primitive type of variable so delete will not make any changes to the number and the value 10 passed to the function will be returned from the function.
