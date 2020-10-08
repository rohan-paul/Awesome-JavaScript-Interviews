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
