## Benefits of Prototypes and how does it help with memory-leak in javascript

A memory leak is any object that persists after you no longer have a use or need for it.

### 1> [http://blog.cowchimp.com/prototype-optimizing-memory-usage/](http://blog.cowchimp.com/prototype-optimizing-memory-usage/)

It's a common scenario that you'll need to loop over an array of items and render a piece of UI for each one for many front-end library.
Take a look at this example ViewModel for a form component which is composed of multiple field components.

```

function FormViewModel(form) {
  var viewModel = this;
  this.fields = [];
  ko.utils.arrayForEach(form.fields, function(field) {
    viewModel.fields.push(new FieldViewModel(field));
  });
}

function FieldViewModel(field) {
  this.key = field.key;
  this.label = field.label;
  this.value = ko.observable(field.value);

  this.save = function() {
    console.log('key "%s" and value "%s"', this.key, this.value());
  };
  this.validate = function() {
    //validate logic
  };
}

```
Notice the save and validate methods.
Each of those methods is needlessly defined every time FieldViewModel is instantiated.
Now look at this alternative example.

```
function FormViewModel(form) {
  var viewModel = this;
  this.fields = [];
  ko.utils.arrayForEach(form.fields, function(field) {
    viewModel.fields.push(new FieldViewModel(field));
  });
}

function FieldViewModel(field) {
  this.key = field.key;
  this.label = field.label;
  this.value = ko.observable(field.value);
}

FieldViewModel.prototype.save = function() {
  console.log('key "%s" and value "%s"', this.key, this.value());
};

FieldViewModel.prototype.validate = function() {
  //validate logic
};

```
In this example the methods are defined on FieldViewModel.prototype.
When the methods are defined in this manner, all field instances will share the same function references.
The methods can access the object's properties via the this.

## 2> [https://boopathi.in/blog/prototyping-and-gc-advantages-in-javascript/](https://boopathi.in/blog/prototyping-and-gc-advantages-in-javascript/)

Prototype based inheritance
In the view of providing the same functionality with scaling opportunities, when we define foo like this,

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

3> []http://podefr.tumblr.com/post/55638600472/dont-use-javascript-prototypes-just-for-reducing](http://podefr.tumblr.com/post/55638600472/dont-use-javascript-prototypes-just-for-reducing)

Prototypes in JavaScript are a way for implementing inheritance, and inheritance is a pattern for code reuse. One of the effects of code reuse is a lower memory footprint

4> [https://stackoverflow.com/questions/1871821/detecting-memory-leaks-in-javascript](https://stackoverflow.com/questions/1871821/detecting-memory-leaks-in-javascript)

The usual thing is to have the methods shared amongst instances by putting them on the prototype, and for instances to have small wrapper functions built in a well-contained closure context (e.g., one that doesn't close over extraneous data) -- usually created by a helper function for that reason -- that set up the call to the instance. That way, only small amounts of code are duplicated for each instance, the majority of it is shared.