/*Implement a HashMap class without using JavaScript’s built-in objects ({}) or Maps. You are provided a hash() function that takes a string and returns a number (the numbers are mostly unique, but sometimes two different strings will return the same number):

function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}
Your HashMap should support just 2 methods, get, set:

let map = new HashMap
map.set('abc', 123)                   // undefined
map.set('foo', 'bar')                 // undefined
map.set('foo', 'baz')                 // undefined
map.get('abc')                        // 123
map.get('foo')                        // 'baz'
map.get('def')                        // undefined*/

// hash function (provided in the problem)

class HashMap {
	constructor() {
		this.data = [] 
		/* Create an empty array whose each index position is a slot or bucket. So this bucket is an array of arrays. So, I will access a value in bucket, which is the inner-array
		bucket[indexInBucket][i]    */
	}

	// This hash function was already given in the original problem
	hash(string) {
		return string
			.split('')
			.reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
	}

	get(key) {
		let index = hash(key); // First I have to hash the given key to get the index postion in the hashtable
		let bucket = this.data[index];
		if (!bucket) {
			return undefined;
		}

		for ([k, v] of bucket) {
			if (key = k) {
				return v;
			}
		}
	}

	/*Function for storing a value in the Hash. In this the "key" is the non-hashed version of index position of the HashTable. So, I have to first get it hashed to create the actual key of the hashTable with which to store the value in the HashTable.
	*/
	set(key, value) {
		let index = hash(key);

		// If the hashed-key does not exist yet then create an empty array with that hashed-key
		if(!this.data[index]) {
			this.data[index] = [];
		}

		/*"bucket" is the slot or bucket at which I will store the passed-in "value" argument. */
		let bucket = this.data[index];
		let indexInBucket = 0; // Initialize the first index no to be searched in bucket with '0'

		/*Now before storing the value at the first empty index position that is found >> 
		Search for the bucket index position starting from zero. Implement collision-resolution. 
		So, first check if there's any value stored at all, in bucket[indexInBucket] >> If true, then check, if this specific key is the one that was assigned to store that value.
		*/
		while (bucket[indexInBucket]) {
			if(bucket[indexInBucket] == key) {
				break
			}
			indexInBucket++
		}
		// And after I have checked for No-collision, store the value. Note that this code for storing is outside the value of the while loop.
		bucket[indexInBucket] = [key, value];
	}
}

// Now test with some key-values - 
// ISSUES - I have to implemnt this test following the best practice file structure.

/*import { test } from 'ava'

test('HashMap', t => {
  let map = new HashMap
  map.set('abc', 123)
  map.set('foo', 'bar')
  map.set('foo', 'baz')
  t.is(map.get('abc'), 123)
  t.is(map.get('foo'), 'baz')
  t.is(map.get('def'), undefined)
})*/

