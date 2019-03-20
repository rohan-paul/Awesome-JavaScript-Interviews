JavaScript is single threaded, that means only one statement is executed at a time. As the JS engine processes our script line by line, it uses this single Call-Stack to keep track of codes that are supposed to run in their respective order. Like what a stack does, a data structure which records lines of executable instructions and executes them in LIFO manner. So say if the engine steps into a function foo(){ it PUSH-es foo() into the stack and when the execution of foo()return; } is over foo() is POP-ped out of the call-stack.

<img src="./sequential-execution-1.png">

EXERCISE 1: So from the above diagram shows how a typical line by line execution happens. When the script of three console.log() statements is thrown at JS — 
Step 1: The console.log("Print 1")is pushed into the call stack and executed, once done with execution, it is then popped out of the stack. Now the stack is empty and ready for any next instruction to be executed.
Step 2: console.log("Print 2"); // is the next instruction is pushed and the same thing repeats until - Step 3: is executed and there is nothing left to push and execute.

#### Further Reading

https://medium.com/@siddharthac6/javascript-execution-of-synchronous-and-asynchronous-codes-40f3a199e687
