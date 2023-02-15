/* Sometimes, you might find that it’s easier to use an array for your list of items. For example, when you are rendering a list. It’s easier to have an array, use a map and create the element in each iteration.

This has an easy solution. Instead of accessing directly the state, use a function. What is also known as a selector.

A selector is a function that takes some state and returns the data you need.

This is the opposite of what Redux normalization would do - i.e. normalization of Redux state means converting an array-of-objects to objects-of-objects

 */

// object
const comments = {
  "1": { id: "1", text: "please add code examples" },
  "2": { id: "2", text: "examples would be great for this article" },
  "3": { id: "3", text: "hi there" },
}

/* But I need the data in the below format

[ { id: '1', text: 'please add code examples' },
  { id: '2', text: 'examples would be great for this article' },
  { id: '3', text: 'hi there' } ]

*/

const commentsSelector = commentObj => {
  return Object.keys(commentObj).map(commentKey => commentObj[commentKey])
}

console.log(commentsSelector(comments))
