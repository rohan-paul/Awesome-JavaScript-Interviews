
# Is Javascript static or dynamic? Is it strong or weak type?

TLDR answer - Javascript is dynamic and weakly typed.

## Static vs Dynamic

A statically typed language is one in which the types are checked are compile time. This is opposed to dynamically typed languages where type is checked as run time. Additionally, most staticly typed languages require you to declare the type as part of the variable declaration process.

## Strong vs weak

Related to static vs dynamic, strong vs weak relates to if a pointer can be reassigned to a value of a different type. In the case of Javascript, this is possible. We are able to do something like below.

```Javascript
var a = "string"
a = 3 // this is allowed
```

Additionally, [type coercion](what-is-type-coercion.md) can occured because Javascript is weakly typed. If it were not, type coercion would not be possible.