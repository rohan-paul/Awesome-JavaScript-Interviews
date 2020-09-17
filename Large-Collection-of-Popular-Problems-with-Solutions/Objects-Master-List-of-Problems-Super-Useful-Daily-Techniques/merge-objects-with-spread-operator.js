// Latest ES6
const obj1 = {
  a: 1,
  b: 2,
}

const obj2 = {
  c: 3,
  d: 4,
}

const merged = { ...obj1, ...obj2 }

// console.log(merged); // => { a: 1, b: 2, c: 3, d: 4 }s

/** There's no limit to the number of objects you can merge.
 *  Later properties overwrite earlier properties with the same name i.e. if a key-name is same the right-to-left priority takes over. */
const allRules = { ...obj1, ...obj2, ...obj3 }

// ECMAScript 2015 (ES6) Standard Method

Object.assign(obj1, obj2)

/** There's no limit to the number of objects you can merge.
 *  All objects get merged into the first object.
 *  Only the object in the first argument is mutated and returned.
 *  Later properties overwrite earlier properties with the same name. */
const allRules = Object.assign({}, obj1, obj2, obj3, etc)
