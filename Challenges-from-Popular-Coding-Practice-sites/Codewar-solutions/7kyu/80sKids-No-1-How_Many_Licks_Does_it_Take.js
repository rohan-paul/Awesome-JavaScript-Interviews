/* https://www.codewars.com/kata/80-s-kids-number-1-how-many-licks-does-it-take

How many licks does it take to get to the tootsie roll center of a tootsie pop?

A group of engineering students from Purdue University reported that its licking machine, modeled after a human tongue, took an average of 364 licks to get to the center of a Tootsie Pop. Twenty of the group's volunteers assumed the licking challenge-unassisted by machinery-and averaged 252 licks each to the center.

Your task, if you choose to accept it, is to write a function that will return the number of licks it took to get to the tootsie roll center of a tootsie pop, given some environmental variables.

Everyone knows it's harder to lick a tootsie pop in cold weather but it's easier if the sun is out. You will be given an object of environmental conditions for each trial paired with a value that will increase or decrease the number of licks. The environmental conditions all apply to the same trial.

Assuming that it would normally take 252 licks to get to the tootsie roll center of a tootsie pop, return the new total of licks along with the condition that proved to be most challenging (causing the most added licks) in that trial.

Example:

totalLicks({ "freezing temps": 10, "clear skies": -2 });
Should return:

"It took 260 licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was freezing temps." */

/* Key Steps - For the argument of the function >> I am given and Object with key-value pairs.
First make an array only with the keys, so I can access those keys.
Then with reduce() add up the average value of 252 with the values of the keys. */

// My solution
function totalLicks(env) {
  var keys = Object.keys(env);
  var totalLicks = keys.reduce((a, b) => a + env[b], 252) // Here, env[b] will be each of the values from the key-value  pair from "env". And the initialValue of reduce() is the number 252.

   // Quick note on sort() function - http://www.javascriptkit.com/javatutors/arraysort.shtml

  let toughChallenge = '';
  // I need to sort the object in descending order of its values. That is in the sort() function, I have to supply the compareFuction in such a way, that compareFunction(a, b) => b - a  - returns greater than 0. That is, the "b" element > more than a. And thereby, while comparing and sorring, each pair of elements in the "key" array the "b" element (being the bigger one) is placed at a lower index than a.
  if (keys.length > 0 && keys.some(k => env[k] > 0)) {
    let biggerReason = keys.sort((a, b) => env[b] - env[a])[0];
    // console.log(env["freezing temps"] - env["clear skies"]);
    toughChallenge = ` The toughest challenge was ${biggerReason}.`;
  }
  return `It took ${totalLicks} licks to get to the tootsie roll center of a tootsie pop.${toughChallenge}`
}

// console.log(totalLicks({"freezing temps": 10, "clear skies": -2}));

// Best Practice solution
const totalLicksBestPractice = (env) => {
  var licks = 252
  let challenge

  for (const effect in env) {
    if ((env[effect] > 0) && (!challenge || env[effect] > env[challenge])) {
        challenge = effect
      }
    licks += env[effect]
  }
  return `It took${licks} licks to get to the tootsie roll center of a tootsie pop.` +
    (challenge ? ` The toughest challenge was ${challenge}. ` : "")
}

// Performance testing between my code and the best practice codewars. And the best practice runs a lot faster
console.time("My solution");
totalLicks({"freezing temps": 10, "clear skies": -2})
console.timeEnd("My solution");

console.time("Best Practice solution");
totalLicksBestPractice({"freezing temps": 10, "clear skies": -2})
console.timeEnd("Best Practice solution");
