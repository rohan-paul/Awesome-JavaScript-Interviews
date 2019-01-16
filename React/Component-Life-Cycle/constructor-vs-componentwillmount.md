### componentWillMount

**componentWillMount** is executed just before the React Component is about to mount on the DOM. Hence, after this method the component will mount. All the things that you want to do before a component mounts has to be defined here.
This method is executed once in a lifecycle of a component and before first render.
Usage: **componentWillMount** is used for initializing the states or props, there is a huge debate going on to merge it with the constructor.

## Difference between constructor and componentWillMount

Only thing you can't achieve inside the constructor that you can with ComponentWillMount is to setState(). Also react throws a warning if anything inside your constructor modifies state even in another component.
