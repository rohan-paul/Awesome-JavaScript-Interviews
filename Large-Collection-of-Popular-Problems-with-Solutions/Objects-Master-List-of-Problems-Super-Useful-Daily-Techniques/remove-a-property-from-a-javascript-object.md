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
