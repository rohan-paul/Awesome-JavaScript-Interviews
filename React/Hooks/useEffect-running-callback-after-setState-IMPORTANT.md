The basic flow is like below

```js
const [loading, setLoading] = useState(false);

...

setLoading(true);
doSomething(); // <--- when here, loading is still false.

```

Setting state like above is still async, so what's the best way to make it synchronous i.e. to wait for this setLoading() call to be finished and the run the doSomething() function

The setLoading() doesn't seem to accept a callback as a second argument like setState() used to.

#### A class-based example

```js
getNextPage = () => {
  // This will scroll back to the top, and also trigger the prefetch for the next page on the way up.
  goToTop();

  if (this.state.pagesSeen.includes(this.state.page + 1)) {
    return this.setState({
      page: this.state.page + 1
    });
  }

  if (this.state.prefetchedOrders) {
    const allOrders = this.state.orders.concat(this.state.prefetchedOrders);
    return this.setState({
      orders: allOrders,
      page: this.state.page + 1,
      pagesSeen: [...this.state.pagesSeen, this.state.page + 1],
      prefetchedOrders: null
    });
  }

  this.setState(
    {
      isLoading: true
    },
    () => {
      getOrders({
        page: this.state.page + 1,
        query: this.state.query,
        held: this.state.holdMode,
        statuses: filterMap[this.state.filterBy]
      })
        .then(o => {
          const { orders } = o.data;
          const allOrders = this.state.orders.concat(orders);
          this.setState({
            orders: allOrders,
            isLoading: false,
            page: this.state.page + 1,
            pagesSeen: [...this.state.pagesSeen, this.state.page + 1],
            // Just in case we're in the middle of a prefetch.
            prefetchedOrders: null
          });
        })
        .catch(e => console.error(e.message));
    }
  );
};
```

#### Solution

**useState** setter doesn't provide a callback after state update is done like setState does in React class components. In order to replicate the same behaviour, you can make use of the a similar pattern like componentDidUpdate lifecycle method in React class components with useEffect using Hooks

useEffect hooks takes the second parameter as an array of values which React needs to monitor for change after the render cycle is complete.

```js
const [loading, setLoading] = useState(false);

....

useEffect(() => {
doSomething(); // This is be executed when `loading` state changes
}, [loading])
setLoading(true);
```

Further, Unlike setState, the updater for useState hook doesn't have a callback, but you can always use a useEffect to replicate the above behaviour. However you need to determine the loading change

The functional approach to your code would look like

```js
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const prevLoading = usePrevious(isLoading);

useEffect(() => {
  if (!prevLoading && isLoading) {
    getOrders({
      page: page + 1,
      query: localQuery,
      held: localHoldMode,
      statuses: filterMap[filterBy]
    })
      .then(o => {
        const { orders: fetchedOrders } = o.data;
        const allOrders = orders.concat(fetchedOrders);

        setOrders(allOrders);
        setPage(page + 1);
        setPagesSeen([...pagesSeen, page + 1]);
        setPrefetchedOrders(null);
        setIsLoading(false);
      })
      .catch(e => console.error(e.message));
  }
}, [isLoading, preFetchedOrders, orders, page, pagesSeen]);

const getNextPage = () => {
  // This will scroll back to the top, and also trigger the prefetch for the next page on the way up.
  goToTop();

  if (pagesSeen.includes(page + 1)) {
    return setPage(page + 1);
  }

  if (prefetchedOrders) {
    const allOrders = orders.concat(prefetchedOrders);
    setOrders(allOrders);
    setPage(page + 1);
    setPagesSeen([...pagesSeen, page + 1]);
    setPrefetchedOrders(null);
    return;
  }

  setIsLoading(true);
};
```

So now the question is - in the case of having multiple **setStates** that we want to wait for, we need multiple **useEffect** hooks.
If you want to take different actions when different states change then yes, we need multiple useEffect() hooks, but if you want to do the sme thing on any of those multiple states change, then you could pass multiple arguments like [isLoading, isUpdated, showError]
