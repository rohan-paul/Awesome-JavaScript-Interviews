/*https://www.codewars.com/kata/find-the-difference-in-age-between-oldest-and-youngest-family-members

At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].*/

//Using spread operator
function differenceInAges(ages) {
  let minAge = Math.min(...ages);
  let maxAge = Math.max(...ages);
  return [minAge, maxAge, maxAge-minAge];
}

// Without using the spread operator
/*function differenceInAges(ages) {
  let minAge = Math.min.apply(null, ages);
  let maxAge = Math.max.apply(null, ages);
  return [minAge, maxAge, maxAge-minAge];
}*/

console.log(differenceInAges([10, 52, 30, 5]));
