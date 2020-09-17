var foo = {
  bar: ['foo', 'bar', 'baz']
};

// access

console.log(foo.bar[2]); // => 'baz'

console.log(foo['bar'][2]);  // => 'baz'

// to dynamically iterate over the nested array 'bar'
let array = foo.bar;
for (let i of array) {
  console.log(i);
}
