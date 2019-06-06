Example - Fetching Hacker News hits data - The App component shows a list of items (hits = Hacker News articles). The state and state update function come from the state hook called useState that is responsible to manage the local state for the data that we are going to fetch for the App component. The initial state is an empty list of hits in an object that represents the data. No one is setting any state for this data yet.

```js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(async () => {
    const result = await axios(
      "http://hn.algolia.com/api/v1/search?query=redux"
    );

    setData(result.data);
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
```

The effect hook called useEffect is used to fetch the data with axios from the API and to set the data in the local state of the component with the state hook’s update function. The promise resolving happens with async/await.

However, when you run your application, you should stumble into a nasty loop with the above implementation of **useEffect()**. The effect hook runs when the component mounts but also when the component updates. Because we are setting the state after every data fetch, the component updates and the effect runs again. It fetches the data again and again. That’s a bug and needs to be avoided. **We only want to fetch data when the component mounts. That’s why you can provide an empty array as second argument to the effect hook to avoid activating it on component updates but only for the mounting of the component.**

The second argument can be used to define all the variables (allocated in this array) on which the hook depends. If one of the variables changes, the hook runs again. If the array with the variables is empty, the hook doesn’t run when updating the component at all, because it doesn’t have to watch any variables.

There is one last catch. In the code, we are using async/await to fetch data from a third-party API. According to the documentation every function annotated with async returns an implicit promise: “The async function declaration defines an asynchronous function, which returns an AsyncFunction object. An asynchronous function is a function which operates asynchronously via the event loop, using an implicit Promise to return its result.

**However, an useEffect() function must not return anything besides a function, which is used for clean-up. That when useEffect() does return a function that function is ONLY used for cleaning up, like what we will do under componentWillUnmount()**

That’s why you may see the following warning in your developer console log: 07:41:22.910 index.js:1452 Warning: useEffect function must return a cleanup function or nothing. Promises and useEffect(async () => …) are not supported, but you can call an async function inside an effect.. That’s why using async directly in the useEffect function isn’t allowed. Let’s implement a workaround for it, by using the async function inside the effect.

```js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://hn.algolia.com/api/v1/search?query=redux"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ul>
      {data.hits.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
```

#### Great explanation of the second array argument to useEffect()

[https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8](https://medium.com/javascript-in-plain-english/state-management-with-react-hooks-no-redux-or-context-api-8b3035ceecf8)

**By default, effects run after every completed render. But, you can choose to fire it only when certain values have changed, passing an array of variables as a second optional parameter.**

```js
// Without the second parameter
useEffect(() => {
  console.log("I will run after every render");
});

// With the second parameter
useEffect(() => {
  console.log("I will run only when valueA changes");
}, [valueA]);
```

**In react-hooks, To have the same result as componentDidMount() - which runs only once when the component completes its mounting - we can send an empty array. Knowing that an empty set does never change, the effect will run only once. In other words, The effect depends on no variables, so it is only triggered when the component mounts.**

```js
// With empty array
useEffect(() => {
  console.log("I will run only once");
}, []);
```

So basically passing empty array as the second argument, I am telling useEffect() that it should never re-run as I am assigning no value the change of which should fire useEffect()

[Source](https://www.robinwieruch.de/react-hooks-fetch-data/)
