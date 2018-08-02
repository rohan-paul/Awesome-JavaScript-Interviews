## What is the Execution Context?

When code is run in JavaScript, the environment in which it is executed is very important, and is evaluated as 1 of the following:

Global code – The default envionment where your code is executed for the first time.

Function code – Whenever the flow of execution enters a function body.

Eval code – Text to be executed inside the internal eval function.

#### Think of the term execution context as the environment / scope the current code is being evaluated in.

<img src="Execution-Context-1.png">

### I have 1 global context represented by the purple border and 3 different function contexts represented by the green, blue and orange borders. There can only ever be 1 global context, which can be accessed from any other context in your program.

### You can have any number of function contexts, and each function call creates a new context, which creates a private scope where anything declared inside of the function can not be directly accessed from outside the current function scope. In the example above, a function can access a variable declared outside of its current context, but an outside context can not access the variables / functions declared inside. Why does this happen? How exactly is this code evaluated?

### As we already know, when a browser first loads your script, it enters the global execution context by default. If, in your global code you call a function, the sequence flow of your program enters the function being called, creating a new execution context and pushing that context to the top of the execution stack.

### If you call another function inside this current function, the same thing happens. The execution flow of code enters the inner function, which creates a new execution context that is pushed to the top of the existing stack. The browser will always execute the current execution context that sits on top of the stack, and once the function completes executing the current execution context, it will be popped off the top of the stack, returning control to the context below in the current stack.