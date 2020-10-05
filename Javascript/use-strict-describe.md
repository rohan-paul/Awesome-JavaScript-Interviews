#### Describe the functionality of the use strict; directive

the `use strict` directive defines that the Javascript should be executed in `strict mode`.
One major benefit that strict mode provides is that it prevents developers from using
undeclared variables. Older versions of javascript would ignore this directive declaration

💡 It's best practice to be more strict instead of failing silently.

- **Makes debugging easier** : Code errors that would otherwise have been ignored or would have failed silently will now generate errors or throw exceptions, alerting you sooner to problems in your code and directing you more quickly to their source.
- **Prevents accidental globals** : Without strict mode, assigning a value to an undeclared variable automatically creates a global variable with that name. This is one of the most common errors in JavaScript. In strict mode, attempting to do so throws an error.
- **Eliminates `this` coercion** : Without strict mode, a reference to a this value of null or undefined is automatically coerced to the global. This can cause many headfakes and pull-out-your-hair kind of bugs. In strict mode, referencing a `this` value of null or undefined throws an error.
- **Disallows duplicate property names or parameter values** : Strict mode throws an error when it detects a duplicate named property in an object (e.g., `var object = {foo: "bar", foo: "baz"};`) or a duplicate named argument for a function (e.g., `function foo(val1, val2, val1){}`), thereby catching what is almost certainly a bug in your code that you might otherwise have wasted lots of time tracking down.
- **Makes eval() safer** : There are some differences in the way `eval()` behaves in strict mode and in non-strict mode. Most significantly, in strict mode, variables and functions declared inside of an eval() statement are not created in the containing scope (they are created in the containing scope in non-strict mode, which can also be a common source of problems).
- **Throws error on invalid usage of delete** : The `delete` operator (used to remove properties from objects) cannot be used on non-configurable properties of the object. Non-strict code will fail silently when an attempt is made to delete a non-configurable property, whereas strict mode will throw an error in such a case.
