/* You will need to track carbs and fat for each type of food. Then you will need to summarize it all at the end so you can figure out how many grams you consumed in each category. Here is our foods object with fake nutritional values.
 */

let foods = [
  { name: "steak", calories: 800, carbs: 10, fat: 30 },
  { name: "fruit", calories: 200, carbs: 20, fat: 0 },
  { name: "salad", calories: 100, carbs: 0, fat: 5 },
  { name: "chips", calories: 300, carbs: 10, fat: 10 },
  { name: "ice cream", calories: 700, carbs: 20, fat: 20 }
];

// The output required is a single object, with key-value pairs for calories, carbs and fat with their corresponding total numbers.

let totalFromFoods = foods.reduce((bucket, item) => {
  bucket["calories"] += item.calories;
  bucket["carbs"] += item.carbs;
  bucket["fat"] += item.fat;

  delete bucket.name;
  return bucket;
});

console.log(totalFromFoods);

/*
OUTPUT

{ name: 'steak', calories: 2100, carbs: 60, fat: 65 }

*/
