### React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state. It works with Webpack and other bundlers that support both Hot Module Replacement (HMR) and Babel plugins. (see my note in file webpack-Hot-Module-Replacement.md) It is the replacement of code in a running application without requiring a restart or reloading of the application. It is very useful when developing because you can see your changes as you make them thus giving immediate feedback. React hot loading depends on a working Webpack HMR setup

https://gaearon.github.io/react-hot-loader/getstarted/  - This is a good resource to implement HMR (Hot Module Replacement) in React

# How React Hot Loader works

https://github.com/gaearon/react-hot-loader.wiki.git

React-Hot-Loader was created to solve 2 tasks:

- Seamlessly replace the old Components, by the new ones.
- Hide all updates from React, to not let him remount changed branches, and thus drop the information stored in component instances, e.g state.

To achieve these goals React-Hot-Loader

- first detects which "old" components shall be replaced by which new ones.
- swaps the real code "behind" the components.

Hot module replacement, enchanted with React-hot-loader, might look like a awesome concept, helping you to build application faster, and better, but, according to some, it also has some drawback like A) Compilation is not so “hot”. It may took a minute to build a bundle or B) It empowers monkey-patching, not the tests first approach.

# How to turn on Hot Module Replacement in create-react-app without ejecting

### While implementing the react-hot-loader without ejecting create-react-app I have followed []this guide](https://daveceddia.com/hot-reloading-create-react-app/)

And my [live app here-a boilterplate basic counter with react and redux](https://github.com/rohan-paul/redux-boilerplate-base-counter/tree/master/redux-boilerplate-base-counter-without-ejecting)

Followed this guide to implement  - https://daveceddia.com/hot-reloading-create-react-app/

#### Create React App don’t have Hot Module Replacement (HMR) set up by default. HMR allows us to replace modules in-place without restarting the server.

Install the following 3 packages

``yarn add react-app-rewired react-app-rewire-hot-loader react-hot-loader``

Create a file called config-overrides.js in the root directory of your project (not under “src”) with this code:

```js
const rewireReactHotLoader = require('react-app-rewire-hot-loader');

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env);
  return config;
}

```
Change index.js accordingly:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Add this import:
import { AppContainer } from 'react-hot-loader';

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <App />
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
registerServiceWorker();

// Render once
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
```

### Change package.json to use react-app-rewired instead of react-scripts. In the “scripts” section, change this:

```js
"scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build",
  "test":  "react-scripts test --env=jsdom"
}
```

To this:

```js
"scripts": {
  "start": "react-app-rewired start",
  "build": "react-app-rewired build",
  "test":  "react-app-rewired test --env=jsdom"
}
```


# Hot reloading In create-react-app AFTER ejecting

[https://github.com/rohan-paul/redux-boilerplate-base-counter/tree/master/redux-boilerplate-base-counter-AFTER-EJECTING](https://github.com/rohan-paul/redux-boilerplate-base-counter/tree/master/redux-boilerplate-base-counter-AFTER-EJECTING)

### First configuration in webpackDevServer.config.js

// Enable hot reloading server. It will provide /sockjs-node/ endpoint
// for the WebpackDevServer client so it can learn when the files were
// updated. The WebpackDevServer client is included as an entry point
// in the Webpack development configuration. Note that only changes
// to CSS are currently hot reloaded. JS changes will refresh the browser.
``hot: true,``

I also completely deleted the webpack files in config folder and instead had a fresh and single webpack.config.js file in the root of the project.

### What is repalaceReducer()

Replaces the reducer currently used by the store to calculate the state. You might need this if your app implements code splitting, and you want to load some of the reducers dynamically. You might also need this if you implement a hot reloading mechanism for Redux.