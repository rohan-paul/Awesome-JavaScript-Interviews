**Generally people think, an easy way to optimize a React component for performance is to make it a class, and make it extend React.PureComponent instead of React.Component. This way, the component will only re-render if it’s state is changed or if it’s props have changed. It will no longer mindlessly re-render every single time its parent re-renders; it will ONLY re-render if one of its props has changed since the last render.**

However its not as straightforward. Read this - [https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578) - Key takeaway from this article is - we dont have to user Pure component in all places, as it would NOT have any performance optimization effect generally. So, keep PureComponent on the shelf until you have a measurement to justify it.

You can see real performance improvements by understanding two things: shouldComponentUpdate and JavaScript strict equality comparisons.

1. So, if you inline an object in your JSX, it will fail the PureComponent prop diff and move on to diffing the more expensive React elements. The element diff will come up empty and now we’ve wasted time on both diffs. Since functions are objects and PureComponent does a strict equality check on props, an inline function will always fail the prop diff and move on to the element diff in the reconciler.
2. If a component usually changes when there’s an update, then a PureComponent will be doing two diffs instead of just one (props and state in shouldComponentUpdate, and then the normal element diff).

Why - Think about it. If you have a Component how many diffs are there? If you have a PureComponent how many diffs are there? The answers are “just one” and “at least one and sometimes two”, respectively. If a component usually changes when there’s an update, then a PureComponent will be doing two diffs instead of just one (props and state in shouldComponentUpdate, and then the normal element diff). Which means it’s going to be slower usually but faster occasionally. Apparently, most of my components changed most of the time, so on the whole, my app got slower. Oops.

Oops - (Meaning after refactoring bunch of my regular component with Pure Component, the App actually got slower). So keep PureComponent on the shelf until you have a measurement to justify it.

#### Now some scenarios

#### 1-st Scenario

#### DOM component event handler

````js

<button
  onClick={() => this.setState(…)}
>click
</button>

```js

It’s common to do nothing more than setState inside of event handlers for buttons, inputs, and other DOM components. This often makes an inline function the cleanest approach. Instead of bouncing around the file to find the event handlers, they’re colocated. The React community generally welcomes colocation.

The button component (and every other DOM component) can’t even be a PureComponent, so there are no shouldComponentUpdate referential identity concerns here.

So, the only reason to think this is slow is if you think simply defining a function is a big enough expense to worry about. We’ve discussed that there is no evidence anywhere that it is. It’s simply armchair performance postulation. These are fine until proven otherwise.


#### 2-nd Scenario - A “custom event” or “action”

```js
<Sidebar
	onToggle={isOpen => {
		this.setState({ sidebarIsOpen: isOpen });
	}}
/>
````

If Sidebar is a PureComponent we will be breaking the prop diff. Again, since the handler is simple, the colocation can be preferable.
With an event like onToggle, why is Sidebar even diffing it? There are only two reasons to include a prop in the shouldComponentUpdate diff:
You use the prop to render.

You use the prop to perform a side-effect in componentWillReceiveProps, componentDidUpdate, or componentWillUpdate.
Most on<whatever> props do not meet either of these requirements. Therefore, most PureComponent usages are over-diffing, forcing developers to maintain referential identity of the handler needlessly.

#### We should only diff the props that matter. That way people can colocate (inline function execution inside render / return) handlers and still get the performance gains you’re seeking (and since we’re concerned about performance, we’re diffing less!).

#### Conclusion

Pure Components gives a considerable increase in performance because it reduces the number of render operation in the application which is a huge win for complex UI and therefore advised to use if possible. Also, there will be cases where you want to use the lifecycle methods of Component and in such cases, we cannot use stateless components.

#### Reading

1. [https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)
