##Coercion

We know becaue of js data-types rules, Strings act like strings and numbers like numbers. But what happens when you need two different data types to interact with one another? Say, when you try to add a string to a number? This is where type coercion comes into play. Type coercion is a way of changing a value from one data type into another data type so that it can adopt the other’s behavior.

Coercion comes in two forms: implicit; and, explicit. In the former, the interpreter looks at an expression that uses two different data types and uses a set of internal rules to decide whether one or both of the values should be coerced so that they have matching rules. In the latter, the source code explicitly instructs the interpreter on how it should handle coercion rather than letting it rely on its internal rules. As is so often the case, this is easiest to observe in code:

```js
// Implicit
console.log("20" + 18);                   // Logs: 2018
// The number 18 is implicitly coerced into a string so that it can be concatenated onto the string “20”.

console.log("20" * 18);                   // Logs: 360
//  The string “20” is implicitly coerced into a number so that it can be multiplied by the number 18.

console.log(20 + true);                   // Logs: 21
// The boolean true is implicitly coerced into a number (1) so that it can be added to the number 20.

console.log("20" == 20);                  // Logs: true
// The string “20” is implicitly coerced into a number so that it can be tested by loose equality against the number 20.

console.log("20" === 20);                 // Logs: false
// No coercion takes place when the strict equality operator is used.

// Explicit
console.log(Number("20") + 18);           // Logs: 38
// The string “20” is explicitly coerced into a number and added to the number 18 (giving us a different result than the implicit coercion version of this expression on line 2).

console.log(String(20) + String(true));   // Logs: "20true"
// The number 20 and the boolean true are explicitly coerced into strings and concatenated (giving us a different result than the implicit coercion version of this expression on line 4.)



```