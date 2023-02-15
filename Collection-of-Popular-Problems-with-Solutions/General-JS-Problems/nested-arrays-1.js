// Problem-1 - Given the below nested arrays, how would we get the letter 'e'?

const letters = ['a', ['b', ['c', ['d', ['e']], 'f']]];

// First, looking at the array, I can see the array ['e'] is at the 4-th level of nested arrays.
//  First, we'd need the second element in letters, letters[1]:
console.log(letters[1]); // => [ 'b', [ 'c', [ 'd', [Array] ], 'f' ] ]


// Then the second element of that resultant element
console.log(letters[1][1]);  // => [ 'c', [ 'd', [ 'e' ] ], 'f' ]

// Going in this way I need to accessthe second element succesively of 2 more levels of nested arrays.

console.log(letters[1][1][1][1]);  // => [ 'e' ]


