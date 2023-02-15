/*https://careercup.com/question?id=5722316476514304

Google Interview Question for Front-end Software Engineers - you are on a biz trip and travelling from one city to another. you have a stack of unsorted flight boarding passes. only departure city and destination city are on the boarding pass. how do you find the first departure city and your final destination city, write the solution in javascript.*/

/*Key solution strategy - 

First note, that each city will be shown up in the boarding ticket 2 times (one for departure and one for arrival) - Except the first city (being the first departure) and the last city (being the last arrival) which will show up only once. 
So arithmatically all cities will cancel each other, except the first departure and final arrival city.


A)  Store the cities in a hashmap.

B) We're going to map each city to the net in and out number ( -1 or +1 ). Then traverse through the hashmap.
For departure, decrease value of net in and out, for arrival, increase value of net in and out. 

C) If a departure-city has not been stored yet in the hashmap, meaning this city has not been travelled yet, So store it with a value of -1

Else, being a departure-city decrement its value by 1

D) If an arrival-city has not been stored yet in the hashmap, meaning this city has not been travelled yet, So store it with a value of 1

Else, being an arrival city, increment its value by 1.

E) So, when the Hashmap is fully constructed, the value of cities will cancel each other, except the First arrival and final destination.

 So, scan through the final hash table to find +1, which is the destination, and -1, which is the departure.
*/


var map = {
	tkt1: {
		departure: 'Los Angeles',
		arrival: 'San Francisco'
	},

	tkt2: {
		departure: 'San Francisco',
		arrival: 'New York'
	},

	tkt3: {
		departure: 'Moscow',
		arrival: 'Mali'
	},

	tkt4: {
		departure: 'Barcelona',
		arrival: 'Moscow'
	},

	tkt5: {
		departure: 'New York',
		arrival: 'Barcelona'
	}
};

findDepartureArrival = function(map) {

	var hashMap = {};

	for (var tkt in map) {
		var depart = map[tkt].departure;
		var arriv = map[tkt].arrival;

		if (!(depart in hashMap))
			hashMap[depart] = -1;
		else
			hashMap[depart] = hashMap[depart] - 1;

		if (!(arriv in hashMap))
			hashMap[arriv] = 1;
		else
			hashMap[arriv] = hashMap[arriv] + 1;

	}
	return hashMap;
}

console.log(findDepartureArrival(map));