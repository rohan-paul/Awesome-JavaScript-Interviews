**CALL()** : A function with argument provided individually. If you know the number of arguments to be passed or there are no argument to pass you can use call.

**APPLY()** : Calls a function with argument provided as an array. You can use apply if you don't know how many arguments are going to be passed to the function.

There is a advantage of using apply over call, we don't need to change the number of argument only we can change an array that is passed.

There is not big difference in performance. But we can say call is bit faster as compare to apply because an array need to evaluate in apply method.

### Both call() and apply() are methods we can use to assign the this pointer for the duration of a method invocation.

```js
global.x = 10
/* To run this file in my vs-code or in terminal (i.e. where I am in node env),
I have to use global . where as < var x = 10 > will work in browser dev-tool

var x = 10 */

var o = { x: 15 }

function f() {
  console.log(this.x)
}

f() // => 10

f.call(o) // => 15
```

### Very Importantly note, the call() method as above will NOT work in arrow function. And this.x will produce undefined. Because, Unlike regular functions, arrow functions do not have their own 'this'

```js
global.x = 10

const obj = {
  x: 15,
  func: () => console.log(this.x),
  func2: function() {
    console.log(this.x)
  },
}

const func = () => console.log(this.x)

func() // => undefined
func.call(obj) // => undefined
obj.func.call(obj) // => undefined
// But the following will work as expected
obj.func2.call(obj) // => 15, accessing the
```

The first invocation of f() will display the value of 10, because this references the global object. The second invocation (via the call method) however, will display the value 15. 15 is the value of the x property inside object obj.

### The call() method invokes the function and uses its first parameter as the this pointer inside the body of the function. In other words - we've told the runtime what object to reference as 'this' while executing inside of function f().

### The apply() method is identical to call(), except apply() requires an array as the second parameter. The array represents the arguments for the target method.

A> https://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply?rq=1 – This page has a long answer explaining apply() with example and how correctly assigning value to “this” is so very important when defining method.

### When calling a function of the form foo.bar.baz(), the object foo.bar is referred to as the receiver. When the function is called, it is the receiver that is used as the value for this. If there is no explicit receiver when a function is called, then the global object becomes the receiver.

### Because functions are first-class objects in JavaScript, they can have their own methods. All functions have the methods call() and apply() which make it possible to redefine the receiver (i.e., the object that this refers to) when calling the function.

### The value of this can never be null or undefined when a function is called. When null or undefined is supplied as the receiver to call() or apply(), the global object is used as the value for receiver instead.

B> The apply function is used to call another function, with a given context and arguments, provided as an array. The min and max functions can take an arbitrary number of input arguments: Math.max(val1, val2, ..., valN)

So if we call:

`Math.min.apply(Math, [1,2,3,4]);`

The apply function will execute:

`Math.min(1,2,3,4);`

Note that the first parameter, the context, is not important for these functions since they are static, they will work regardless of what is passed as the context.

### Special note - With ES6, the equivalent code for the above is `Math.max(...Arr)`

Replacing “Math” with “null” would output same output
