#### Q - What will be the output of the below code and why

```js
const user = {
  name: "Raj",
  location: {
    city: "NY",
    state: "NY",
  },
}
const copy = Object.assign({}, user)
// OR
// const copy = { ...user };
copy.location.city = "Albany"
console.log("original: ", user.location)
console.log("copy:", copy.location)
```

#### Ans - The output of the above code is

```js
original:  {
  city: 'Albany',
  state: 'NY'
}
copy: {
  city: 'Albany',
  state: 'NY'
}

```

#### Explanations

The reason for the changed original object is because when we use Object.assign or spread operator, it only does shallow copy, which means while creating a copy of the object, properties of only the first level are copied and if there are nested properties then only their reference is copied which means the copied reference still refers to the original place where the object is stored.
So in our case, the location property will still refer to the original object which is a user object in our case.
To better understand it, check out my previous article [HERE](https://medium.com/javascript-in-plain-english/why-you-should-not-use-array-to-remove-all-the-elements-of-array-42ad2951d47e#5efd)
