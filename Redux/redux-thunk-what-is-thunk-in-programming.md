1> In computer programming, a thunk is a subroutine used to inject an additional calculation into another subroutine. Thunks are primarily used to delay a calculation until its result is needed, or to insert operations at the beginning or end of the other subroutine. They have a variety of other applications in compiler code generation and modular programming.

https://en.wikipedia.org/wiki/Thunk

2> It is really simple. When you have some computation, like adding 3 to 5, in your program, then creating a thunk of it means not to calculate it directly, but instead create a function with zero arguments that will calculate it when the actual value is needed.

https://stackoverflow.com/questions/925365/what-is-a-thunk-as-used-in-scheme-or-in-general

3> With the help of the above two features, thunk encapsulates computations without evaluation, in other words, thunk does not store the actual value; instead, it stores the way of how the value would be computed. And the actual compuations will be carried out only when you decide so.

http://typeocaml.com/2014/11/06/magic-of-thunk/