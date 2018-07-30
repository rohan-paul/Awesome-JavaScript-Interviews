### React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state. It works with Webpack and other bundlers that support both Hot Module Replacement (HMR) and Babel plugins.

https://gaearon.github.io/react-hot-loader/getstarted/

## Hot reloading In create-react-app

webpackDevServer.config.js

// Enable hot reloading server. It will provide /sockjs-node/ endpoint
// for the WebpackDevServer client so it can learn when the files were
// updated. The WebpackDevServer client is included as an entry point
// in the Webpack development configuration. Note that only changes
// to CSS are currently hot reloaded. JS changes will refresh the browser.
``hot: true,``

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

https://daveceddia.com/hot-reloading-create-react-app/

Create React App don’t have Hot Module Replacement (HMR) set up by default. HMR allows us to replace modules in-place without restarting the server.

## The Plain Webpack Way
With just 3 lines of code, you can turn on HMR, but with one big caveat: React state and DOM state are not preserved between reloads. This is kind of a bummer.

You can add these lines to index.js to turn on standard Webpack HMR that doesn’t preserve state between reloads:

```js
if (module.hot) {
  module.hot.accept();
}
```
/home/paul/PAUL/H/Web/R/REDUX/Small-Redux-Post-BootCamp/boilerplate-kind-Redux-Counter-22Jul-2018/simple-redux-app/src/index.jsx

```js

if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
  module.hot.accept('./reducers', () => { store.replaceReducer(reducer); });
}
```