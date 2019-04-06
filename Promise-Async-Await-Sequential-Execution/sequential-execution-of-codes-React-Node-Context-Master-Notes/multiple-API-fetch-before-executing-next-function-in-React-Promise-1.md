#### Problem - It a common requirement in React to sequentially execute codes ONLY after multiple API calls have given their result to the component. Here, I have two different API points that I am trying to get and restructure after getting the data : students and scores. They are both an array of objects.

#### So the goal is : first, get students and scores, and second, with students and scores saved in state, I will modify them and create a new state based on students and scores state. In short, I have 3 functions: getStudents, getScores, and rearrangeStudentsAndScores. getStudents and getScores need to finish before rearrangeStudentsAndScores can run.

[I have not tested this code yet in an actual app]

```js
// Refactor getStudents and getScores to return  Promise for their response bodies
function getStudents() {
  return fetch(`api/students`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(response => response.json());
}

function getScores() {
  return fetch(`api/scores`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then(response => response.json());
}

// Request both students and scores in parallel and return a Promise for both values.
// `Promise.all` returns a new Promise that resolves when all of its arguments resolve.
function getStudentsAndScores() {
  return Promise.all([getStudents(), getScores()]);
}

// When this Promise resolves, both values will be available. And because getStudentsAndScores() returns a Promise, I can chain a .then() function to it.
getStudentsAndScores().then(([students, scores]) => {
  // both have loaded!
  console.log(students, scores);
});
```

In this approach I make both requests at the same time.

#### Source

[https://stackoverflow.com/questions/44980247/how-to-finish-all-fetch-before-executing-next-function-in-react](https://stackoverflow.com/questions/44980247/how-to-finish-all-fetch-before-executing-next-function-in-react)
