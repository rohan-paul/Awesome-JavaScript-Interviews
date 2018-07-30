When I have to import multiple functional-classes or functional-components in a single statement.

### Below is my ./component/my-components.js

```js
import React from 'react';

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
import React from 'react';

import * as My from './components/my-components.js';

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

In this case, you don't need to do ``export default`` . You can just export each action. Generally, it's a good practice to import only what you actually use.

Another example is in my -
https://github.com/rohan-paul/redux-boilerplate-base-counter/blob/master/src/containers/Home.js