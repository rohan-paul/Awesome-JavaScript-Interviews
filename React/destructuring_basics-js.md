### Basics application of Destructuring


Without using the destructuring syntax getting multiple values out of an array can be quite cumbersome. You would do something like this:


```js
const items = ['car', 'bike', 'plane'];

const car = items[0];
const bike = items[1];
const plane = items[2];

console.log(car); // 'car'
console.log(bike); // 'bike'
console.log(plane); // 'plane'

```

With the destructuring assignment syntax this can be written like this:


```js
const items = ['car', 'bike', 'plane'];
const [car, bike, plane] = items;

console.log(car); // 'car'
console.log(bike); // 'bike'
console.log(plane); // 'plane'

```

This syntax also works with nested arrays:


```js
const items = ['car', ['bike', 'plane'], ['boat']];
const [car, [bike, plane], [boat]] = items;

console.log(car); // 'car'
console.log(bike); // 'bike'
console.log(plane); // 'plane'
console.log(boat); // 'boat'
```

You can combine the destructuring syntax with the rest syntax:

```js
const items = ['car', 'bike', 'plane', 'boat'];
const [car, ...transportation] = items;

console.log(car); // 'car'
console.log(transportation); // ['bike', 'plane', 'boat']

```

### The destructuring assignment syntax with Objects


Destructuring with Objects helps you assigning property values to variables. I only specify the binded property, and this will be bound to the value to of the property. 

```js

const car = {
  brand: 'ferrari',
  type: 'sportscar',
  horsepower: 600,
  wheels: 4
};

const { brand, type } = car;

console.log(brand); // ferrari
console.log(type); // sportscar

```

Just like with Arrays you can also use this syntax with nested objects:


```js
const car = {
  brand: 'ferrari',
  type: 'sportscar',
  engine: { 
    horsepower: 600,
    liters: 4,
    fuel: 'gas'
  },
  wheels: 4
};

const { engine: { horsepower } } = car;

console.log(horsepower); // 600

```


## Aplication of destructuring

The destructuring syntax can help when accepting parameters in functions. Instead of requesting specific arguments in a specific order it would be a lot easier to just pass one object and then expose only the needed properties using the destructuring syntax:

```js
const carFunction = ({ brand, engine: { horsepower, liters }}) => {
  return `${brand} with engine of ${horsepower} horsepower and ${liters} liters`
}

const car = {
  brand: 'ferrari',
  type: 'sportscar',
  engine: {
    horsepower: 600,
    liters: 4,
    fuel: 'gas'
  },
  wheels: 4
};

console.log(carFunction(car)); // ferrari with engine of 600 horsepower and 4 liters

```

Last but not least the destructuring syntax is very helpful when importing from CommonJS modules. Most likely the module exports more than you need and with this syntax you can avoid cluttering the namespace.

```js
const { session } = require('passport');
session();

// instead of
const passport = require('passport');
passport.session();
```