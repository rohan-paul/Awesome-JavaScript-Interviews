// Sorting an array of JavaScript objects

// Problem statement - Create a function to sort the objects by the price property in ascending order

var homes = [
  {
    h_id: "3",
    city: "Dallas",
    state: "TX",
    zip: "75201",
    price: "162500",
  },
  {
    h_id: "4",
    city: "Bevery Hills",
    state: "CA",
    zip: "90210",
    price: "319250",
  },
  {
    h_id: "5",
    city: "New York",
    state: "NY",
    zip: "00010",
    price: "962500",
  },
]

sortedHome = arr => {
  return arr.sort((a, b) => {
    return parseFloat(a.price) - parseFloat(b.price)
  })
}

// console.log(sortedHome(homes));

/* Given the price is mentioned as a string, I have to use parseFloat()

 The parseFloat() function parses a string and returns a floating point number.

This function determines if the first character in the specified string is a number. If it is, it parses the string until it reaches the end of the number, and returns the number as a number, not as a string.*/

// Alternative - I could also use Number
sortedHome1 = arr => {
  return arr.sort((a, b) => Number(a.price) - Number(b.price))
}

console.log(sortedHome(homes))
