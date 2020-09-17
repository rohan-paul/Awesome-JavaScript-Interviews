// Problem statement - return only cities with population of more than 500000. And the returned city names should be sorted by their population number from lowest to hieghest
// Hint - use function chaining

var data = [
    {"city":"seattle", "state":"WA", "population":652405, "land_area":83.9},
    {"city":"new york", "state":"NY", "population":8405837, "land_area":302.6},
    {"city":"boston", "state":"MA", "population":645966, "land_area":48.3},
    {"city":"kansas city", "state":"MO", "population":467007, "land_area":315}
  ];

let bigCities = data.filter((item) => item.population > 500000)
.sort((a, b) => a - b)
.map((item) => item.city)

console.log(bigCities);