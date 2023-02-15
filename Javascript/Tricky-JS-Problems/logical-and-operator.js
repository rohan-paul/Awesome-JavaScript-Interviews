// Problem - whats the outcome and why

let a = {
  fruit: "a",
}
let b = {
  juice: 2,
}
console.log(a && b)

/*
A> The logical and operator, stops at a false value and returns the last value.active

Basically, the Logical AND operator (&&), will return the value of the second operand if the first is truthy, and it will return the value of the first operand if it is by itself falsy, for example:

B>

true && "foo"; // "foo"
NaN && "anything"; // NaN
0 && "anything";   // 0

Note that falsy values are those that coerce to false when used in boolean context, they are null, undefined, 0, NaN, an empty string, and of course false, anything else coerces to true.

C> We see this in React all the time -

It's very helpful with nested objects. Say you might have an object like this, but prop or nestedProp might not exist:

var a = {
   prop : {
     nestedProp : {
        hello : 'hello'
     }
   }
}

Now, what if we need to check for the string inside the nestedProp

You can't say:

if(a.prop.nestedProp.hello === 'hello')

Because prop and nestedProp might not be defined and if you try to do that check you'd get a TypeError.

So you do this:

var hello = a.prop && a.prop.nestedProp && a.prop.nestedProp.hello;


If a.prop is undefined it will stop there and return undefined. If it's a truthy value then it will evaluate a.prop.nestedProp and if it's a falsey value then it will return that otherwise it returns a.prop.nestedProp.hello.

*/
