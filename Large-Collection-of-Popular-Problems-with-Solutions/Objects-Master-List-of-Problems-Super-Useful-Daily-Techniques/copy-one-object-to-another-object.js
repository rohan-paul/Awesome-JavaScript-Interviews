// copy-one-object-to-another-object

let myObject = { apple: "a", orange: "o" };

// 1st solution to copy
let secondObject = Object.assign({lemon: "1"}, myObject)

console.log(secondObject);  // => { lemon: '1', apple: 'a', orange: 'o' }

// 2-nd solution to copy using ES6 spread ... operator

let secondObject2 = {lemon: "1", ...myObject}

console.log(secondObject2);  // => { lemon: '1', apple: 'a', orange: 'o' }
