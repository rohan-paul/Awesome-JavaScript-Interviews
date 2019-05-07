#### This is an example of “class-free” object oriented programming

```js
const MyObj3 = initVal => {
	let myVal = initVal;
	return {
		get: function() {
			return myVal;
		},
		set: function(val) {
			myVal = val;
		}
	};
};
```

Just like the approach above, we can use it to create an object like this:

const x = MyObj3(0)

The myVal variable is essentially private, which means we can no longer access it using x.myVal like in the other implementations above. Instead we have to call the getter function:

x.get()

#### Closures enable a strong contract

The variable is conceptually “saved” inside the object returned from the function thanks to Javascript closures. This means that we can set the value with the setter method (i.e. x.set(2)), but attempting to directly change the field (i.e. x.myVal = 2) won’t do anything.

The greatest part of having these explicit setters and getters is that the object now has a strong contract/interface with the outside world. The state is fully encapsulated and the only ways in and out of the object is through the setters and getters.

One drawback about using closures is the issue of performance. While there doesn’t seem to be any difference when creating an object, method calls on the object using closures were about 80% slower.
