```js
function Product(_name, _price) {
  const name = _name;
  const price = _price;

  this.getName = function() {
    return name;
  };
  this.getPrice = function() {
    return price;
  };
}
```

We define these function by prepending the `this` keyword which makes them accessible from the outside. Notice that the functions have full access to the properties.

```js
function Basket() {
  const products = [];

  this.addProduct = function(amount, product) {
    products.push(...Array(amount).fill(product));
  };

  this.calcTotal = function() {
    return products
      .map(product => product.getPrice())
      .reduce((a, b) => a + b, 0);
  };

  this.printShoppingInfo = function() {
    console.log("one has to pay in total: " + this.calcTotal());
  };
}
```

### Encapsulation

Sometimes encapsulation refers to hiding of data or data Abstraction which means representing essential features hiding the background detail. Most of the OOP languages provide access modifiers to restrict the scope of a variable, but their are no such access modifiers in JavaScript but their are certain way by which we can restrict the scope of variable within the Class/Object.

```js
function person(fname, lname) {
  let firstname = fname;
  let lastname = lname;

  let getDetails_noaccess = function() {
    return `First name is: ${firstname} Last
    name is: ${lastname}`;
  };

  this.getDetails_access = function() {
    return `First name is: ${firstname}, Last
    name is: ${lastname}`;
  };
}
let person1 = new person("Mukul", "Latiyan");

console.log(person1.firstname); // => undefined

console.log(person1.getDetails_noaccess); // => undefined

console.log(person1.getDetails_access()); // => First name is: Mukul, Last    name is: Latiyan
```

In the above example we try to access some property(person1.firstname) and functions(person1.getDetails_noaccess) but it returns undefined.

The `firstnamel` and `getDetails_noaccess` variable is essentially private, which means we can no longer access it using x.myVal

While, the getter method, there is a method- getDetails_access() - which we can access from the person object(person1.getDetails_access()), by changing the way to define a function we can restrict its scope.
