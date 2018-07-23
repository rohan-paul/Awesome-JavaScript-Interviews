## Benefits of Prototypes and how does it help with memory-leak in javascript

https://boopathi.in/blog/prototyping-and-gc-advantages-in-javascript/

Prototype based inheritance
Now, lets get back to where we started - the discussion about the cons of functional pattern in JavaScript. In the view of providing the same functionality with scaling opportunities, when we define foo like this,

```
    //base class
    var foo = function (attr) {
      this.attr = attr;
    }
    foo.prototype.get = function () {
      return this.attr;
    }
    foo.prototype.set = function (val) {
      this.attr = val;
    }
    //inherited from foo
    var bar = function(attr) {
      this.p = foo.apply(this, [attr]);
      this.attr = attr;
    }
    bar.prototype.greet = function () { return "welcome" + attr; }

```
it doesn't become a concern when foo is called because of how it takes advantage of the prototype-based inheritance. Each method is defined only once in the prototype chain and is available to every execution context objectized from foo. This limits the number of function objects that are created and does not risk the leaking of memory.
