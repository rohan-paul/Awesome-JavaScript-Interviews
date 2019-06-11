Dan says the following very clearly about the best practice way to implement async call within useEffect()

As I explained above, setState(await something())) is a bad idea because you don't know whether await something() is still relevant. For example, if the user starts fetching one profile page but then switches to another profile. Then you're at the mercy of which request arrives first, and can show incorrect data.

This kind of code would handle it correctly:

```js
useEffect(() => {
	let didCancel = false;

	async function fetchMyAPI() {
		let url = "http://something/" + productId;
		let config = {};
		const response = await myFetch(url);
		if (!didCancel) {
			// Ignore if we started fetching something else
			console.log(response);
		}
	}

	fetchMyAPI();
	return () => {
		didCancel = true;
	}; // Remember if we start fetching something else
}, [productId]);
```

#### The significance of the didCancel

My main target is that - only if didCancel is false, then do some execution like setting state etc.

So the didCancel is initialized as false and when I am unmounting / leaving the component I make it to be true, by returning a function.

##### Reading

-   [https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret](https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret)

-   [https://github.com/facebook/react/issues/14326](https://github.com/facebook/react/issues/14326)

-   [https://codesandbox.io/s/jpknv0kyn9](https://codesandbox.io/s/jpknv0kyn9)

-   [An example of axios cleanup with useEffect before unmounting](https://stackoverflow.com/questions/53861916/canceling-an-axios-rest-call-in-react-hooks-useeffects-cleanup-failing)
