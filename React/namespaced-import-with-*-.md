##### Namespace imports import all of the exported variables from a file under one name. For example:

```js
// my-module.js
export const foo = 123
export const bar = 456


// main.js
import \* as stuff from './my-module'

// stuff is: { foo: 123, bar: 456 }

```

##### Default imports - On the other hand, default imports import a specific default export from another module. That is, the variable exported as export default in the imported module.

```js
// my-module.js
export default {
  foo: 123,
  bar: 456
};

// main.js
import stuff from "./my-module";
```

// stuff is: { foo: 123, bar: 456 }

##### The purpose of default exports is to give an nice interface for importing a single unit of functionality from another module: a single class, a single utility function, and so on. The default export is meant to promote the practice of single-responsibility modules.

When I have to import multiple functional-classes or functional-components in a single statement.

### Below is my ./component/my-components.js

```js
import React from "react";

export class Foo extends React.Component {
  render() {
    return <div>foo</div>;
  }
}

export class Bar extends React.Component {
  render() {
    return <div>bar</div>;
  }
}
```

### MY App.js - Here I want to import both Foo() and Bar() from my-components.js in a single statement.

```js
import React from "react";

import * as My from "./components/my-components.js";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <My.Foo />
        <My.Bar />
      </div>
    );
  }
}
```

In this case, you don't need to do `export default` . You can just export each action. Generally, it's a good practice to import only what you actually use.

Another example is in my -
https://github.com/rohan-paul/redux-boilerplate-base-counter/blob/master/src/containers/Home.js
