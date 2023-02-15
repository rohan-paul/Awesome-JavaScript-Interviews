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

---

### Solution-4

The term you have used in your question title `Remove a property from a JavaScript object`, can be interpreted in some different ways. The one is to remove it for whole the memory and the list of object keys or the other is just to remove it from your object. As it has been mentioned in some other answers, the `delete` keyword is the main part. Let's say you have your object like:

    myJSONObject = {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};

If you do:

    console.log(Object.keys(myJSONObject));

the result would be:

    ["ircEvent", "method", "regex"]

You can delete that specific key from your object keys like:

    delete myJSONObject["regex"];

Then your objects key using `Object.keys(myJSONObject)` would be:

    ["ircEvent", "method"]

But the point is if you care about memory and you want to whole the object gets removed from the memory, it is recommended to set it to null before you delete the key:

    myJSONObject["regex"] = null;
    delete myJSONObject["regex"];

The other important point here is to be careful about your other references to the same object. For instance, if you create a variable like:

    var regex = myJSONObject["regex"];

Or add it as a new pointer to another object like:

    var myOtherObject = {};
    myOtherObject["regex"] = myJSONObject["regex"];

Then even if you remove it from your object `myJSONObject`, that specific object won't get deleted from the memory, since the `regex` variable and `myOtherObject["regex"]` still have their values. Then how could we remove the object from the memory for sure?

The answer would be to **delete all the references you have in your code, pointed to that very object** and also **not use `var` statements to create new references to that object**. This last point regarding `var` statements, is one of the most crucial issues that we are usually faced with, because using `var` statements would prevent the created object from getting removed.

Which means in this case you won't be able to remove that object because you have created the `regex` variable via a `var` statement, and if you do:

    delete regex; //False

The result would be `false`, which means that your delete statement haven't been executed as you expected. But if you had not created that variable before, and you only had `myOtherObject["regex"]` as your last existing reference, you could have done this just by removing it like:

    myOtherObject["regex"] = null;
    delete myOtherObject["regex"];

**In other words, a JavaScript object gets killed as soon as there is no reference left in your code pointed to that object.**

---

**Update:**
Thanks to @AgentME:

> Setting a property to null before deleting it doesn't accomplish
> anything (unless the object has been sealed by Object.seal and the
> delete fails. That's not usually the case unless you specifically
> try).

To get more info on `Object.seal`: [Object.seal()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal)

---

### Solution-5

Objects in JavaScript can be thought of as maps between keys and values. The `delete` operator is used to remove these keys, more commonly known as object properties, one at a time.

    var obj = {
      myProperty: 1
    }
    console.log(obj.hasOwnProperty('myProperty')) // true
    delete obj.myProperty
    console.log(obj.hasOwnProperty('myProperty')) // false

The `delete` operator does not directly free memory, and it differs from simply assigning the value of `null` or `undefined` to a property, in that the property _itself_ is removed from the object. Note that if the _value_ of a deleted property was a reference type (an object), and another part of your program still holds a reference to that object, then that object will, of course, not be garbage collected until all references to it have disappeared.

`delete` will only work on properties whose descriptor marks them as configurable.

---

### Solutlion-6

Another alternative is to use the [Underscore.js][1] library.

Note that `_.pick()` and `_.omit()` both return a copy of the object and don't directly modify the original object. Assigning the result to the original object should do the trick (not shown).

Reference: [link][2] **\_.pick(object, \*keys)**

Return a copy of the object, filtered to only have values for the
whitelisted keys (or array of valid keys).

    var myJSONObject =
    {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};

    _.pick(myJSONObject, "ircEvent", "method");
    => {"ircEvent": "PRIVMSG", "method": "newURI"};

Reference: [link][3] **\_.omit(object, \*keys)**

Return a copy of the object, filtered to omit the
blacklisted keys (or array of keys).

    var myJSONObject =
    {"ircEvent": "PRIVMSG", "method": "newURI", "regex": "^http://.*"};

    _.omit(myJSONObject, "regex");
    => {"ircEvent": "PRIVMSG", "method": "newURI"};

For arrays, `_.filter()` and `_.reject()` can be used in a similar manner.

[1]: https://underscorejs.org
[2]: http://underscorejs.org/#pick
[3]: http://underscorejs.org/#omit

---

### Solution-7

With `unset` function

The reason for writing this with new `unset` function, is to keep the index of all other variables in this hash_map. Look at the following example, and see how the index of "test2" did not change after removing a value from the hash_map.

    function unset(unsetKey, unsetArr, resort){
      var tempArr = unsetArr;
      var unsetArr = {};
      delete tempArr[unsetKey];
      if(resort){
        j = -1;
      }
      for(i in tempArr){
        if(typeof(tempArr[i]) !== 'undefined'){
          if(resort){
            j++;
          }else{
            j = i;
          }
          unsetArr[j] = tempArr[i];
        }
      }
      return unsetArr;
    }

    var unsetArr = ['test','deletedString','test2'];

    console.log(unset('1',unsetArr,true)); // output Object {0: "test", 1: "test2"}
    console.log(unset('1',unsetArr,false)); // output Object {0: "test", 2: "test2"}

---
