### let vs var

So to recap, var is function scoped and if you try to use a variable declared with var before the actual declaration, you’ll just get undefined. const and let are blocked scoped and if you try to use variable declared with let or const before the declaration you’ll get a ReferenceError.

```js
function discountPrices(prices, discount) {
  var discounted = []

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount)
    var finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // 3
  console.log(discountedPrice) // 150
  console.log(finalPrice) // 150

  return discounted
}
```

Take a look at that for loop. Are the variables declared inside of it accessible outside of it? Turns out, they are.
since variables declared with var are function scoped

Now do the same function with let

```js
function discountPrices(prices, discount) {
  let discounted = []

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i) // ReferenceError: i is not defined
  console.log(discountedPrice)
  console.log(finalPrice)

  return discounted
}

discountPrices([100, 200, 300], 0.5) // ReferenceError: i is not defined
```

We get ReferenceError: i is not defined. What this tells us is that variables declared with let are block scoped, not function scoped. So trying to access i (or discountedPrice or finalPrice) outside of the “block” they were declared in is going to give us a reference error as we just barely saw.

### const

const person = {
name: 'Kim Kardashian'
}

person.name = 'Kim Kardashian West' // ✅

person = {} // ❌ Assignment to constant variable.

Notice that changing a property on an object isn’t reassigning it, so even though an object is declared with const, that doesn’t mean you can’t mutate any of its properties. It only means you can’t reassign it to a new value.
