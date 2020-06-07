### spread operator vs rest parameters

From the definition we saw earlier, rest parameters collect all the remaining elements into an array. This allows us to do really neat function definitions. Let's see how we put them to use.

```js
function add(x, y) {
  return x + y
}

add(1, 2, 3, 4) // => returns 3
```

The above function call returns 3, this is because in Javascript it is possible to call a function with any number of arguments. However, only the fist two arguments will be counted.

With rest parameters we can gather any number of arguments into an array and do what we want with them. So we can re-write the add function like this:

```js
function add(...args) {
  let result = 0

  for (let arg of args) result += arg

  return result
}

add(1) // returns 1
add(1, 2) // returns 3
add(1, 2, 3, 4, 5) // returns 15
```

#### Rest parameters have to be at the last argument. This is because it collects all remaining/ excess arguments into an array.

```js
function xyz(x, y, ...z) {
  console.log(x, " ", y) // hey hello

  console.log(z) // ["wassup", "goodmorning", "hi", "howdy"]
  console.log(z[0]) // wassup
  console.log(z.length) // 4
}

xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")
```

### The Rest Operator in React Example

The dots syntax can be also used to call the Rest operator in ES6. It's mostly useful when you want to avoid using the arguments object to access the passed arguments to a function.

This is an example pattern that uses the Rest operator to create authenticated routes in React using React Router:

```JS
const AuthenticatedRoute = ({ ...rest }) => {
  const id = this.state;
  if (!id) {
    return <Redirect to='/login' />;
  }
  return <Route {...rest} />;
};

// In Use
<AuthenticatedRoute
  path='/dashboard'
  data={this.state.data}
  render={() => (
    <SomeComponent someProps={this.someProps} />
  )}
/>
```

Further, First a look in JSX. When you do (scenario 1):

```js
<Component myProp={something} />
```

The something typically is a JavaScript expression.

When you use the spread operator,

```
<Component {...something} />

```

Then something should be a JavaScript object.

### Now the spread operator

The spread operator allows us to expand elements. With rest parameters we were able to get a list of arguments into an array. spread operators however, let us unpack elements in an array to single/individual arguments.

Adding array elements to an existing array

```js
const arr = ["Joy", "Wangari", "Warugu"]
const newArr = ["joykare", ...arr]
```

The value of newArr will be [ 'joykare', 'Joy', 'Wangari', 'Warugu' ]. Note: Unlike rest parameters you can use the spread operator as the first argument. So if you wanted to add an element as the last element in your array you cna do this:

```js
const myNames = [...arr, "joykare"]
```

The value of myNames in this case will be [ 'Joy', 'Wangari', 'Warugu', 'joykare' ].

#### Copying arrays

We can use the spread operator to copy an array.

```js
const arr = [1, 2, 3]
const arr2 = [...arr]
```

This copies arr into arr2. Now we can do things on arr2 and any changes done to arr2 will not have any effect arr.

Similarly to MERGE OBJECTS - Spread properties also provide a new way to merge two or more objects, which can be used as an alternative to the Object.assign() method: - This is VERY IMPORTANT

```js
const obj1 = { a: 10 }
const obj2 = { b: 20 }
const obj3 = { c: 30 }

// ES2018
console.log({ ...obj1, ...obj2, ...obj3 }) // → {a: 10, b: 20, c: 30}

// ES2015
console.log(Object.assign({}, obj1, obj2, obj3)) // → {a: 10, b: 20, c: 30}
```
