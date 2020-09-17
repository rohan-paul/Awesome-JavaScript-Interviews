### General Object Destructuring Example

```js
let myObj = {
    name: "Luke",
    age: 25,
    hobbies: "music"
};

let { name, age, hobbies } = myObj;

console.log(name, age, hobbies);    // => Luke 25 music
```

Now the variables listed in between the curly braces are assigned the value of their respective properties in myObj.

### The order in which the variables are listed in the curly braces doesn’t matter. Additionally, we don’t have to list all the properties of an object if we only need one or two.

```js
console.log(age, name, hobbies);    // => 25 'Luke' 'music'

console.log(hobbies, name, age);    // => music Luke 25

console.log(hobbies, name);    // => music Luke

```

### General Array Destructuring Example

```js
let arr = [‘Jim’, ‘Bob’, ‘Sarah’, ‘Cassie’];

let [ jim, bob, sarah, cassie ] = arr;

console.log(jim, bob, sarah, cassie); //outputs: Jim Bob Sarah Cassie
```

## Unlike objects, the name we give the variables doesn’t matter. Let’s change the above example:  So, each of the variable names will ONLY count for the index-positions I fetch.

```js
let arr = [‘Jim’, ‘Bob’, ‘Sarah’, ‘Cassie’];

let [ var1, var2, var3, var4] = arr;

console.log(var1, var2, var3, var4); //outputs: Jim Bob Sarah Cassie
```

### If I include less variables then there are indexes in the arrays, then just like in Object-destructuring, only that many array element will be included in the returned array, starting from zero-index position and AGAIN without giving any meaning to the the name I give to the variables. So, each of the variable names will ONLY count for the index-positions I fetch.

let arr = [‘Jim’, ‘Bob’, ‘Sarah’, ‘Cassie’];

let [ jim, bob, cassie ] = arr;

console.log(jim, bob, cassie); //outputs: Jim Bob Sarah

## Using Spread operator -  It is often used for splitting out a part of an object, but keeping the remaining properties in another object.

```js
let myObj = {

    name: "Luke",
    age: 25,
    hobbies: "music"

};

let { hobbies, ...rest } = myObj;  // => Luke 25 music

console.log(hobbies, rest)  // => music { name: 'Luke', age: 25 }

console.log(hobbies, rest.age)  // => music 25

```