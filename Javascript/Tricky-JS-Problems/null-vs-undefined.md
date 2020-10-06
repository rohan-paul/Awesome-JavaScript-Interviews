### null vs undefined

#### Question: What are the differences between null and undefined?

**Answer**: JavaScript has two distinct values for nothing, null and undefined.

undefined
undefined means, value of the variable is not defined. JavaScript has a global variable undefined whose value is "undefined" and typeof undefined is also "undefined". Remember, undefined is not a constant or a keyword. undefined is a type with exactly one value: undefined. Assigning a new value to it does not change the value of the type undefined.

### 8 Ways to get Undefined:

A declared variable without assigning any value to it.
Implicit returns of functions due to missing return statements.
return statements that do not explicitly return anything.
Lookups of non-existent properties in an object.
Function parameters that have not passed.
Anything that has been set to the value of undefined.
Any expression in the form of void(expression)
The value of the global variable undefined

### null

null means empty or non-existent value which is used by programmers to indicate “no value”. null is a primitive value and you can assign null to any variable. null is not an object, it is a primitive value. For example, you cannot add properties to it. Sometimes people wrongly assume that it is an object, because typeof null returns "object".

Btw, null == undefined

ref: [history of typeof null](http://www.2ality.com/2013/10/typeof-null.html)
