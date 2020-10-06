# Native deep cloning

It's called "structured cloning", works experimentally in Node 11 and later, and hopefully will land in browsers. See [this answer](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/10916838#10916838) for more details.

# Fast cloning with data loss - JSON.parse/stringify

If you do not use `Date`s, functions, `undefined`, `Infinity`, RegExps, Maps, Sets, Blobs, FileLists, ImageDatas, sparse Arrays, Typed Arrays or other complex types within your object, a very simple one liner to deep clone an object is:

`JSON.parse(JSON.stringify(object))`

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    const a = {
      string: 'string',
      number: 123,
      bool: false,
      nul: null,
      date: new Date(),  // stringified
      undef: undefined,  // lost
      inf: Infinity,  // forced to 'null'
      re: /.*/,  // lost
    }
    console.log(a);
    console.log(typeof a.date);  // Date object
    const clone = JSON.parse(JSON.stringify(a));
    console.log(clone);
    console.log(typeof clone.date);  // result of .toISOString()

<!-- end snippet -->

See [Corban's answer](https://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-deep-clone-an-object-in-javascript/5344074#5344074) for benchmarks.

# Reliable cloning using a library

Since cloning objects is not trivial (complex types, circular references, function etc.), most major libraries provide function to clone objects. **Don't reinvent the wheel** - if you're already using a library, check if it has an object cloning function. For example,

- lodash - [`cloneDeep`](https://lodash.com/docs#cloneDeep); can be imported separately via the [lodash.clonedeep](https://www.npmjs.com/package/lodash.clonedeep) module and is probably your best choice if you're not already using a library that provides a deep cloning function
- AngularJS - [`angular.copy`](https://docs.angularjs.org/api/ng/function/angular.copy)
- jQuery - [`jQuery.extend(true, { }, oldObject)`](https://api.jquery.com/jquery.extend/#jQuery-extend-deep-target-object1-objectN); `.clone()` only clones DOM elements

# ES6

For completeness, note that ES6 offers two shallow copy mechanisms: [`Object.assign()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) and the [spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax).
which copies values of all enumerable own properties from one object to another. For example:

```
var A1 = {a: "2"};
var A2 = Object.assign({}, A1);
var A3 = {...A1};  // Spread Syntax
```
