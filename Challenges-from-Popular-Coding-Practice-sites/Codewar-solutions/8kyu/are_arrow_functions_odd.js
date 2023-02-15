/*https://www.codewars.com/kata/are-arrow-functions-odd

Time to test your basic knowledge in functions! Return the odds from a list:

odds([1,2,3,4,5]) #=> [1,3,5]*/

function odds(values){
  return values.filter(a => (a %2 )!= 0);
}

console.log(odds([1,2,3,4,5])) ;
