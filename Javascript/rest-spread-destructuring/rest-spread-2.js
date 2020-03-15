/* KEY POINT - The spread operator allows us to spread the value of an array (or any iterable) across zero or more arguments in a function or elements in an array (or any iterable).

The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array. So rest parameter is ONLY about when I am implementing argument passing mechanism in more compact way - Otherwise both take the same triple-dot (...) syntax */

// Example - 1 - Application of spread operator

const team = {
  name: "Liberty",
  coach: "David",
  players: ["Marge", "Aiden", "Hervert", "Sherry"],
}

// and we have a function like below where the last 2 arguments are to be filled-up with firstPlayer and secondPlayer from the team dataset.

const printTeam = (teamName, coach, firstPlayer, secondPlayer) => {
  console.log(`Team: ${teamName}`)
  console.log(`Coach: ${coach}`)
  console.log(firstPlayer, secondPlayer)
}

// Using spread operator BELOW , we are converting an array into individual arguments for function call. So, in this case, the spread operator will take the first 2 elements (i.e. exactly as many as required in the function definition)from the players array and pass it as the third and fourth argument to the printTeam function. So the ...is followed by the array I am trying to spread.

printTeam(team.name, team.coach, ...team.players)
//Will output the below.

// Team: Liberty
// Coach: David
// Marge Aiden

/* Example - 2 - Application of BOTH rest ( for spreading the function arguments ) and spread operator (for sperading the aruments inside the function )
 Now, below is the same implementation making the function with rest operator in its argument calls, so it takes as many arguments as passed in the third positional arugment of this function. Remember from my topmost noted key-point that - The rest parameter allows us to pass an indefinite number of parameters to a function and access them in an array.
*/

const printTeamRest = (teamName, coach, ...players) => {
  console.log(`Team: ${teamName}`)
  console.log(`Coach: ${coach}`)
  console.log(`Players: ${players.join(", ")}`)
}
printTeamRest(team.name, team.coach, ...team.players)

/* EXAMPLE - 3 - Spread Operator - The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables (for destructuring assignment) are expected.*/

// for Arrays
const fruits = ["apple", "banana"]
const veggies = ["cucumber", "potato"]

// concatenate the array with spread operators
const food = ["grapes", ...fruits, ...veggies]
// -> ["grapes", "apple", "banana", "cucumber", "potato"]

const [fav, ...others] = food
console.log(fav) // => grapes
console.log(others) // => [ 'apple', 'banana', 'cucumber', 'potato' ]

// For function calls
const foodsToEat = ["grapes", "apple", "banana", "cucumber", "potato"]

function eat() {
  console.log(...arguments) // applying spread operator to pick up all arguments
}

eat(...foodsToEat) // => grapes apple banana cucumber potato

// EXAMPLE - 4 - Just for comparison, defining the same eat() function without the spread operator inside the function, i.e. without using the part < (...arguments) >

function eat() {
  let argumentsArr = Array.from(arguments)

  console.log(argumentsArr)
}

eat(...foodsToEat)

// EXPLANATION OF THE ABOVE - Since the argument object isn’t an array, we first have to convert it into an array using the Array.from method before I can access them while invoking the function with rest operator ie. the part -
// < (...foodsToEat) >

// EXAMPLE - 5 - For objects - extracting and concatinating an object with spread operator to a new object, note, how I assigne new key-value pairs while creating a new object, and also concatinating with an existing object

const member = {
  name: "Rohan",
  title: "software developer",
  skills: ["javascrip:t", "react", "redux"],
}

const newMemberObj = {
  ...member,
  prevProj: ["A", "B"],
}

console.log(newMemberObj)

/*Will output the below crating the new object like so -

{ name: 'Rohan',
  title: 'software developer',
  skills: [ 'javascrip:t', 'react', 'redux' ],
  prevProj: [ 'A', 'B' ] }

 */

console.log(newMemberObj.name) // => Ben

// So while I was creating 'newMemberObj' above, behind the scene what exactly happened is the below code of
// const newMemberObj = Object.assign(member, {prevProj: [ 'A', 'B']})
