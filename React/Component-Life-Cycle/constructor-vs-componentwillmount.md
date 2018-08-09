### componentWillMount

This function is called right before the component’s first render

## Difference between constructor and componentWillMount

Only thing you can't achieve inside the constructor that you can with ComponentWillMount is to setState() also react throws a warning if anything inside your constructor modifies state even in another component.