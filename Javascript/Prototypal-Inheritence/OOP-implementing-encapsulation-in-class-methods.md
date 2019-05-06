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

We define these function by prepending the this keyword which makes them accessible from the outside (see Encapsulation). Notice that the functions have full access to the properties.

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
