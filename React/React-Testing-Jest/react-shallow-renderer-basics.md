### Shallow Renderer

``import ShallowRenderer from 'react-test-renderer/shallow'; // ES6``

https://reactjs.org/docs/shallow-renderer.html

Overview

When writing unit tests for React, shallow rendering can be helpful. Shallow rendering lets you render a component “one level deep” and assert facts about what its render method returns, without worrying about the behavior of child components, which are not instantiated or rendered. This does not require a DOM.

For example, if you have the following component:

```js
function MyComponent() {
  return (
    <div>
      <span className="heading">Title</span>
      <Subcomponent foo="bar" />
    </div>
  );
}
```
Then you can assert:

```js
import ShallowRenderer from 'react-test-renderer/shallow';

// in your test:
const renderer = new ShallowRenderer();
renderer.render(<MyComponent />);
const result = renderer.getRenderOutput();

expect(result.type).toBe('div');
expect(result.props.children).toEqual([
  <span className="heading">Title</span>,
  <Subcomponent foo="bar" />
]);
```

But remember that this **shallow** is different from enzyme's **shallow**

Some in the developer community opine that - use Enzyme's shallow and enzyme-to-json for your Jest snapshot tests (instead of react-test-renderer). Why? Because **Enzyme's shallow** creates snapshots that omit child components, so each snapshot is truly tied to a single component.

Shallow rendering is useful to constrain yourself to testing a component as a unit, and to ensure that your tests aren't indirectly asserting on behavior of child components