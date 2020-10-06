#### Question

Say I create an object as follows:

````js
    let myObject = {
        "ircEvent": "PRIVMSG",
        "method": "newURI",
        "regex": "^http://.*"
    };


```What is the best way to remove the property `regex` to end up with new `myObject` as follows?

```js
    let myObject = {
        "ircEvent": "PRIVMSG",
        "method": "newURI"
    };

````

### Solution-1

Like this:

    delete myObject.regex;
    // or,
    delete myObject['regex'];
    // or,
    var prop = "regex";
    delete myObject[prop];

    var myObject = {
        "ircEvent": "PRIVMSG",
        "method": "newURI",
        "regex": "^http://.*"
    };
    delete myObject.regex;

    console.log(myObject);

For anyone interested in reading more about it, Stack Overflow user [kangax][1] has written an incredibly in-depth blog post about the `delete` statement on their blog, _[Understanding delete][2]_. It is highly recommended.

[1]: https://stackoverflow.com/users/130652/kangax
[2]: http://perfectionkills.com/understanding-delete/

---

### Solution-2

    var myObject = {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};

    delete myObject.regex;

    console.log ( myObject.regex); // logs: undefined

---

### Solution-3

The `delete` operator is used to remove properties from objects.

    const obj = { foo: "bar" }
    delete obj.foo
    obj.hasOwnProperty("foo") // false

Note that, for arrays, **this is not the same as removing an element**. To remove an element from an array, use `Array#splice` or `Array#pop`. For example:

    arr // [0, 1, 2, 3, 4]
    arr.splice(3,1); // 3
    arr // [0, 1, 2, 4]

# Details

`delete` in JavaScript has a different function to that of the keyword in C and C++: it does not directly free memory. Instead, its sole purpose is to remove properties from objects.

For arrays, deleting a property corresponding to an index, creates a sparse array (ie. an array with a "hole" in it). Most browsers represent these missing array indices as "empty".

    var array = [0, 1, 2, 3]
    delete array[2] // [0, 1, empty, 3]

Note that `delete` does not relocate `array[3]` into `array[2]`.

Different built-in functions in JavaScript handle sparse arrays differently.

- `for...in` will skip the empty index completely.

- A traditional `for` loop will return `undefined` for the value at the index.

- Any method using `Symbol.iterator` will return `undefined` for the value at the index.

- `forEach`, `map` and `reduce` will simply skip the missing index.

So, the `delete` operator should not be used for the common use-case of removing elements from an array. Arrays have a dedicated methods for removing elements and reallocating memory: `Array#splice()` and `Array#pop`.

## Array#splice(start[, deleteCount[, item1[, item2[, ...]]]])

`Array#splice` mutates the array, and returns any removed indices. `deleteCount` elements are removed from index `start`, and `item1, item2... itemN` are inserted into the array from index `start`. If `deleteCount` is omitted then elements from startIndex are removed to the end of the array.

    let a = [0,1,2,3,4]
    a.splice(2,2) // returns the removed elements [2,3]
    // ...and `a` is now [0,1,4]

There is also a similarly named, but different, function on `Array.prototype`: `Array#slice`.

## Array#slice([begin[, end]])

`Array#slice` is non-destructive, and returns a new array containing the indicated indices from `start` to `end`. If `end` is left unspecified, it defaults to the end of the array. If `end` is positive, it specifies the zero-based **non-inclusive** index to stop at. If `end` is negative it, it specifies the index to stop at by counting back from the end of the array (eg. -1 will omit the final index). If `end <= start`, the result is an empty array.

    let a = [0,1,2,3,4]
    let slices = [
        a.slice(0,2),
        a.slice(2,2),
        a.slice(2,3),
        a.slice(2,5) ]

    //   a           [0,1,2,3,4]
    //   slices[0]   [0 1]- - -
    //   slices[1]    - - - - -
    //   slices[2]    - -[3]- -
    //   slices[3]    - -[2 4 5]

# Array#pop

`Array#pop` removes the last element from an array, and returns that element. This operation changes the length of the array.
