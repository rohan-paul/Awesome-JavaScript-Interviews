#### Q - What will be the output of the below code and why

```js
function display() {
  var a = (b = 10)
}
display()
console.log("b", typeof b === "undefined")
console.log("a", typeof a === "undefined")
```

#### Ans -

```
b false
a true
```

#### Explanations

This is because the assignment operator has right to left associativity in Javascript which means it will be evaluated from right to left so first, b will be assigned the value 10 and then it’s assigned to a. Therefore

```js
function display() {
  var a = (b = 10)
}
```

is same as

```js
function display() {
  var a = (b = 10)
}
```

which is same as

```
function display() {
 b = 10;
 var a = b;
}
```

So b becomes a global variable because there is no var keyword before it and a becomes a local variable. Therefore, outside the function, only b is available so `typeof a === 'undefined'` comes as true and `typeof b === 'undefined'` comes as false.

![](assets/2020-10-08-17-22-29.png)

If we execute the above code in strict mode as shown below,

```js
"use strict"
function display() {
  var a = (b = 10)
}
display()
console.log("b", typeof b === "undefined")
console.log("a", typeof a === "undefined")
```

It will throw an error because b becomes a global variable and strict mode does not allow creating global variables so you will get an error when you execute this code.
That’s it for today. I hope you learned something new.
