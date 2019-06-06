https://reactjs.org/docs/hooks-faq.html#how-do-lifecycle-methods-correspond-to-hooks

constructor: Function components don’t need a constructor. You can initialize the state in the useState call. If computing the initial state is expensive, you can pass a function to useState.

**getDerivedStateFromProps**: Schedule an update while rendering instead.

**shouldComponentUpdate**: See React.memo.

**render**: This is the function component body itself.

**componentDidMount**, **componentDidUpdate**, **componentWillUnmount**: The useEffect Hook can express all combinations of these (including less common cases).

**componentDidCatch** and **getDerivedStateFromError**: There are no Hook equivalents for these methods yet, but they will be added soon.
