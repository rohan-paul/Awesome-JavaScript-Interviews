const omit = require("lodash.omit")
const pick = require("lodash.pick")
const map = require("lodash.map")
const partialRight = require("lodash.partialright")

const data = [
  {
    login: "vopani",
    id: 8954217,
    node_id: "MDQ6VXNlcjg5NTQyMTc=",
    avatar_url: "https://avatars1.githubusercontent.com/u/8954217?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/vopani",
    html_url: "https://github.com/vopani",
    followers_url: "https://api.github.com/users/vopani/followers",
    following_url: "https://api.github.com/users/vopani/following{/other_user}",
    gists_url: "https://api.github.com/users/vopani/gists{/gist_id}",
    starred_url: "https://api.github.com/users/vopani/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/vopani/subscriptions",
    organizations_url: "https://api.github.com/users/vopani/orgs",
    repos_url: "https://api.github.com/users/vopani/repos",
    events_url: "https://api.github.com/users/vopani/events{/privacy}",
    received_events_url: "https://api.github.com/users/vopani/received_events",
    type: "User",
    site_admin: false,
    score: 1,
  },
  {
    login: "NirantK",
    id: 3250749,
    node_id: "MDQ6VXNlcjMyNTA3NDk=",
    avatar_url: "https://avatars1.githubusercontent.com/u/3250749?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/NirantK",
    html_url: "https://github.com/NirantK",
    followers_url: "https://api.github.com/users/NirantK/followers",
    following_url:
      "https://api.github.com/users/NirantK/following{/other_user}",
    gists_url: "https://api.github.com/users/NirantK/gists{/gist_id}",
    starred_url: "https://api.github.com/users/NirantK/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/NirantK/subscriptions",
    organizations_url: "https://api.github.com/users/NirantK/orgs",
    repos_url: "https://api.github.com/users/NirantK/repos",
    events_url: "https://api.github.com/users/NirantK/events{/privacy}",
    received_events_url: "https://api.github.com/users/NirantK/received_events",
    type: "User",
    site_admin: false,
    score: 1,
  },
]

const allIndividual = [
  {
    login: "vopani",
    bio: "https://en.wikipedia.org/wiki/Rohan_Rao",
    email: null,
    name: "Rohan Rao",
  },
  {
    login: "NirantK",
    bio: "@bitspilanicode alum. Ex @soroco",
    email: null,
    name: "Nirant",
  },
]

var mapped = map(data, partialRight(pick, ["login", "id", "avatar_url"]))

console.log(mapped)

/* Expected Output -

[ { login: 'vopani',
    id: 8954217,
    avatar_url: 'https://avatars1.githubusercontent.com/u/8954217?v=4' },
  { login: 'NirantK',
    id: 3250749,
    avatar_url: 'https://avatars1.githubusercontent.com/u/3250749?v=4' } ]
 */

/* Explanations of partialRight -

From Official Dox - https://lodash.com/docs/4.17.15#partialRight

_.partialRight(func, [partials])

Arguments
func (Function): The function to partially apply arguments to.
[partials] (...*): The arguments to be partially applied.
Returns
(Function): Returns the new partially applied function.

This method is like _.partial except that partially applied arguments are appended to the arguments it receives. So it appends them (the partially applied arguments) to the end of any arguments passed.

This method is like _.partial except that partially applied arguments are appended to the arguments it receives.

My Notes - So partialRight() is the implementation of 'Partial Application' techniques in function definition. See below for more on this.


Agin from official doc of _partial() - https://lodash.com/docs/4.17.15#partial

_.partial(func, [partials])

Creates a function that invokes func with partials prepended to the arguments it receives. This method is like _.bind except it does not alter the this binding.

And finally from Lodash map functions official dox - https://lodash.com/docs/4.17.15#map

_.map(collection, [iteratee=_.identity])

Creates an array of values by running each element in collection thru iteratee. The iteratee is invoked with three arguments:
(value, index|key, collection).

Arguments

collection (Array|Object): The collection to iterate over.
[iteratee=_.identity] (Function): The function invoked per iteration.
Returns

(Array): Returns the new mapped array.
 */

/* More general explanation on partialRight() -

This is a case of the the fundamental partial application technique of JS. Even more fundamentally, In computer science (https://en.wikipedia.org/wiki/Partial_application), partial application (or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity. Given a function {\displaystyle f\colon (X\times Y\times Z)\to N}{\displaystyle f\colon (X\times Y\times Z)\to N}, we might fix (or 'bind') the first argument, producing a function of type {\displaystyle {\text{partial}}(f)\colon (Y\times Z)\to N}{\displaystyle {\text{partial}}(f)\colon (Y\times Z)\to N}.


http://benalman.com/news/2012/09/partial-application-in-javascript/#partial-application

Partial application can be described as taking a function that accepts some number of arguments, binding values to one or more of those arguments, and returning a new function that only accepts the remaining, un-bound arguments.

What this means is that, given any arbitrary function, a new function can be generated that has one or more arguments "bound," or partially applied.

JavaScript has the built-in method .bindthat works on functions with any number of arguments and can bind an arbitrary amount of parameters. Its invocation has the following syntax.

function.bind(thisValue, [arg1], [arg2], ...)

It turns function into a new function whose implicit this parameter is this value and whose initial arguments are always as given.

function addition(x, y) {
   return x + y;
}
const plus5 = addition.bind(null, 5)
plus5(10) // output -> 15

Note: this value does not matter for the (non-method) function addition which is why it is null above.

Partial application is the act of taking a function which takes multiple arguments, and “locking in” some of those arguments, producing a function which takes fewer arguments.

#### Further Reading
https://medium.com/@JosephJnk/partial-function-application-in-javascript-and-flow-7f3ca87074fe

For instance, say we have this function:

function power(exponent: number, base: number) : number {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result = result * base;
  }
  return result;
}


We can use this to raise numbers to some power, like doing power(2, 3) to see that 3 squared is 9, or power(3, 2) to see that 2 cubed is 8. It would be more readable to just say square(3) or cube(2), though. To do this, we want to produce a function that’s the result of “locking-in” 2 and 3 to power. We can do this by manually declaring new functions:

const square = x => power(2, x)
const cube = x => power(3, x)

This is partial application: we create square by making a new function, which just passes its arguments through to another function, adding some hard-coded arguments to that other function. We could be more explicit in our intent by making a partialApply function that produces these new functions for us:

const square = partialApply(power, 2);
const cube = partialApply(power, 3);

This partialApply function is quite easy to write, because it turns out that partial application is baked into JavaScript:

function partialApply (fn, ...args) {
  return fn.bind(null, ...args)
}

Note, the arguments (i.e. ...args) that I am passing will start from left to right in the function that will be invoked (ie. fn) So in this case of

const square = x => partialApply(power, 2)

The number 2 will be applied from left to right, i.e. 2 becomes the first argument (exponent ) to the the power() function


*/
