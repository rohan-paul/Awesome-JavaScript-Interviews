// given an key-value pair object get the key with max value

let myObj = { "1": 2, "2": 1, "3": 2, "5": 3, "8": 1 }

// Case when I have multiple maximum value
let myObj2 = { "1": 3, "2": 1, "3": 2, "5": 3, "8": 1 }

// SOL-1
getMaxKey_1 = obj =>
  Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b))

console.log(getMaxKey_1(myObj)) // => 5

console.log(getMaxKey_1(myObj2)) // => 5 // Does not give the first key with max value i.e. 1

// SOL-2
getMaxKey_2 = obj => {
  // the variable max is the highest value that I have in the entire object
  let max = Math.max(...Object.keys(obj).map(i => obj[i]))

  // So, now I have to find the key given this highest value
  return Object.keys(obj).filter(i => obj[i] === max)[0]
}

// console.log(getMaxKey_2(myObj)); // => 5

// In case you have many equal values and not only one maximum:
// The below will return the first key with max value i.e. 1 for input object = { '1': 3, '2': 1, '3': 2, '5': 3, '8': 1 }
getMaxKey_3 = obj => {
  return Object.keys(obj).filter(i => {
    return obj[i] === Math.max(...Object.values(obj))
  })[0]
}

console.log(getMaxKey_3(myObj))

console.log(getMaxKey_3(myObj2))
