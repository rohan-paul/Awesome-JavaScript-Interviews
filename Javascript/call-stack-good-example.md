## What is the call stack?

### At the most basic level, a call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).

## Execution context is a concept in the language spec that—in layman's terms—roughly equates to the 'environment' a function executes in; that is, variable scope (and the scope chain, variables in closures from outer scopes), function arguments, and the value of the this object.

## The call stack is a collection of execution contexts.

When code is run in JavaScript, the environment in which it is executed is very important, and is evaluated as 1 of the following:

Global code – The default envionment where your code is executed for the first time.
Function code – Whenever the flow of execution enters a function body.
Eval code – Text to be executed inside the internal eval function.

LIFO: When we say that the call stack, operates by the data structure principle of Last In, First Out, it means that the last function that gets pushed into the stack is the first to be pop out, when the function returns.

Let us take a look at a code sample to demonstrate LIFO by printing a stack trace error to the console.

```js
function firstFunction(){
    throw new Error('Stack Trace Error');
}
function secondFunction(){
    firstFunction();
}
function thirdFunction(){
    secondFunction();
}

thirdFunction();
```
And will get the below in dev-tool.

```js
Uncaught Error: Stack Trace Error
    at firstFunction (<anonymous>:2:7)
    at secondFunction (<anonymous>:5:1)
    at thirdFunction (<anonymous>:8:1)
    at <anonymous>:10:1
firstFunction @ VM4011:2
secondFunction @ VM4011:5
thirdFunction @ VM4011:8
(anonymous) @ VM4011:10
```

I have on purpose put in the firstFunction() to ``throw error`` so can we see the full call stack of the sequence of function execution. Else, if I just return a console.log from that function, then it would get normally logged-out.

Note the arrangement of the functions as the stack begins with the firstFunction() (which is the last function that got into the stack, but got executed the first. And is popped out to throw the error. Then followed by the secondFunction(), and then the thirdFunction() (which is the first function that gets pushed into the stack when the code is executed.

Temporarily store: When a function is invoked (called), the function, its parameters, and variables are pushed into the call stack to form a stack frame. This stack frame is a memory location in the stack. The memory is cleared when the function returns as it is pop out of the stack.

Manage function invocation (call): The call stack maintains a record of the position of each stack frame. It knows the next function to be executed (and will remove it after execution). This is what makes code execution in JavaScript synchronous. Now look at the below code

```js
function firstFunction() {
    console.log("hello from firstFunction")
}

function secondFunction() {
    firstFunction();
    console.log("The end from secondFunction");
}

function thirdFunction() {
    secondFunction();
    console.log("The end from thirdFunction");
}

thirdFunction()
```
```
OUPUT
firstFunction
The end from secondFunction
The end from thirdFunction
```

This is what happens when the code is run:

1. When thirdFunction() gets executed, an empty stack frame is created. It is the main (anonymous) entry point of the program.

2. thirdFunction() then calls secondFunction() which is pushed into the stack.

3. secondFunction() then calls firstFunction() which is pushed into the stack.

4. firstFunction() returns and prints “Hello from firstFunction” to the console.

5. firstFunction() is popped off the stack.

6. The execution order then move to secondFunction().

7. secondFunction() returns and print “The end from secondFunction” to the console.

8. The execution order then move to thirdFunction().

9.  thirdFunction() returns and print “The end from thirdFunction” to the console.

### What causes a stack overflow?

A stack overflow occurs when there is a recursive function (a function that calls itself) without an exit point. The browser (hosting environment) has a maximum stack call that it can accomodate before throwing a stack error.

Here is an example:

```js
function callMyself(){
  callMyself();
}
callMyself();
```
The callMyself() will run until the browser throws a “Maximum call size exceeded”. And that is a stack overflow.


## The key takeaways from the call stack are:

1. It is single-threaded. Meaning it can only do one thing at a time.
2. Code execution is synchronous.
3. A function invocation creates a stack frame that occupies a temporary memory.
4. It works as a LIFO — Last In, First Out data structure.






