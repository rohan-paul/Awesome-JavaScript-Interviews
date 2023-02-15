/*1. Object.freeze()
Its just a method that doesn’t allow us to add new properties to such object, remove existing ones and change the current prototype of such object. The syntax is quite straightforward:

Object.freeze(someObject); 

An attempt to change the prop1 property will be unsuccessful and we will get the following error:

Uncaught TypeError: Cannot assign to read only property ‘prop1’ of object ‘#<Object>’
Although, we still can change a property’s value if it’s an object:

// no error, new value is set
frozenObject.prop3.innerProp = 'changed';

*/

const sampleObject = {
	prop1: "some string",
	prop2: 5,
	prop3: {
		innerProp: "changeable"
	}
};

const frozenObject = Object.freeze(sampleObject);
frozenObject.prop1 = "some other string"; // Uncaught TypeError

/*
2. Object.seal()
With sealing, the situation is a little bit different. We still can’t add new properties, delete existing ones and every property becomes non-configurable but the values of properties can be changed:
 */

const toBeSealed = {
	prop1: "some value",
	prop2: "some other value"
};

const sealedObject = Object.seal(toBeSealed);

sealedObject.prop1 = "new value"; // no error, value changed
// Cannot add property newProp, object is not extensible
sealedObject.newProp = "won't be added";
// Cannot delete property 'prop2' of #<Object>
delete sealedObject.prop2;
// Cannot define property newProp, object is not extensible
Object.defineProperty(sealedObject, "newProp", {
	writable: true
});

// The method of verifying if an object is sealed is quite intuitive:

Object.isSealed(sealedObject); // true
Object.isSealed(toBeSealed); // true
Object.isSealed({}); // false

/* 
3. Conclusion
Both Object.freeze() and Object.seal() deal with object’s immutability. The main difference between the two of them is that in case of Object.seal() we can change the values of the defined properties. Methods of checking if an object is frozen or sealed are intuitive and return a boolean value: Object.isFrozen()
and Object.isSealed(). You can also take a look at the
Object.preventExtensions() method to go deeper into the topic of object immutability. As a bonus, take a look at the speed test for both methods at jsPerf.

### Reading


https://medium.com/@wlodarczyk_j/object-freeze-vs-object-seal-ba6d7553a436*/
