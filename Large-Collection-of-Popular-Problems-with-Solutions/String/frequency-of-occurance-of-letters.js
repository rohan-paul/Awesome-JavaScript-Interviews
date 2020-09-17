// Problem - Given a string output a hashMap showing index positions of each letter occuring in the string. And the index positions should be an array

letterFrequencyMap = str => {

	let letterMap = {}	

	str.forEach((letter, index) => {

		letterMap[letter] = letterMap[letter] || [];
		letterMap[letter].push(index);
	})

	return letterMap;
}

let str = "rohhanr".split('')

console.log(str);

console.log(letterFrequencyMap(str));

/*Output

[ 'r', 'o', 'h', 'h', 'a', 'n', 'r' ]

{ r: [ 0, 6 ], o: [ 1 ], h: [ 2, 3 ], a: [ 4 ], n: [ 5 ] }

*/