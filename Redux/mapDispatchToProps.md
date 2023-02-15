Basically with `mapDispatchToProps` I connect a Redux action to a React component. `mapDispatchToProps` function let's us inject certain props into the React component that can dispatch actions.

#### 1> [Official docs of mapDispatchToProps from react-redux](https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)

**[mapDispatchToProps(dispatch, [ownProps]): dispatchProps]** (Object or Function): If an object is passed, each function inside it is assumed to be a Redux action creator. An object with the same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props.

If a function is passed, it will be given dispatch as the first parameter. It’s up to you to return an object that somehow uses dispatch to bind action creators in your own way. (Tip: you may use the bindActionCreators() helper from Redux.)

If your mapDispatchToProps function is declared as taking two parameters, it will be called with dispatch as the first parameter and the props passed to the connected component as the second parameter, and will be re-invoked whenever the connected component receives new props. (The second parameter is normally referred to as ownProps by convention.)

#### `mapStateToProps()` is a utility which helps your component get updated state(which is updated by some other components),

#### `mapDispatchToProps()` is a utility which will help your component to fire an action event (dispatching action which may cause change of application state)

#### mapDispatchToProps can either be a function or an object.

The **`mapDispatchToProps`** function let's us inject certain props into the React component that can dispatch actions.

`mapDispatchToProps` is an argument of the `connect` function from **`react-redux`**.

`mapStateToProps`, `mapDispatchToProps` and `connect` from `react-redux` library provides a convenient way to access your **state** and **dispatch** functions of your store.

In a nutshell, your components are supposed to be concerned only with displaying stuff. The only place they are supposed to get information from is their props.

Separated from "displaying stuff" (components) is:

#### how you get the stuff to display,

#### and how you handle events.

#### That is what containers are for.

Therefore, a "well-designed" component in the pattern look like this:

```js
class FancyAlerter extends Component {
  sendAlert = () => {
    this.props.sendTheAlert();
  };

  render() {
    <div>
      <h1>Today's Fancy Alert is {this.props.fancyInfo}</h1>
      <Button onClick={sendAlert} />
    </div>;
  }
}
```

See how this component gets the info it displays from props (which came from the redux store via `mapStateToProps`) and it also gets its action function from its props: `sendTheAlert()`.

That's where `mapDispatchToProps` comes in: in the corresponding container

```js
// FancyButtonContainer.js

function mapDispatchToProps(dispatch) {
    return({
        sendTheAlert: () => {dispatch(ALERT_ACTION)}
    })
}

function mapStateToProps(state} {
    return({fancyInfo: "Fancy this:" + state.currentFunnyString})
}

export const FancyButtonContainer = connect(
    mapStateToProps, mapDispatchToProps)(
    FancyAlerter
)
```

Now that it's the container that knows about redux and dispatch and store and state and ... stuff.

The component in the pattern, FancyAlerter, which does the rendering doesn't need to know about any of that stuff: it gets its method to call at onClick of the button, via its props.

And ... mapDispatchToProps was the useful means that redux provides to let the container easily pass that function into the wrapped component on its props.

All this looks very like the todo example in docs, and another answer here, but I have tried to cast it in the light of the pattern to emphasize why.

(Note: you can't use mapStateToProps for the same purpose as mapDispatchToProps for the basic reason that you don't have access to dispatch inside mapStateToProp. So you couldn't use mapStateToProps to give the wrapped component a method that uses dispatch.

#### [Example-2](https://blog.benestudio.co/5-ways-to-connect-redux-actions-3f56af4009c8)

Let’s consider the following React component with simple Redux action creators that are sendMessage and deleteMessage.

```js
import React, { Component } from "react";
import { connect } from "react-redux";
import { sendMessage, deleteMessage } from "./actions";
class ChatComponent extends Component {
  handleSend = message => {
    this.props.sendMessage(message);
  };
  handleDelete = id => {
    this.props.deleteMessage(id);
  };
  render() {
    // ...
  }
}
const mapStateToProps = state => state;

// Here I am wrapping dispatch manually

const mapDispatchToProps = dispatch => ({
  sendMessage: message => dispatch(sendMessage(message)),
  deleteMessage: id => dispatch(deleteMessage(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatComponent);
```

### [Official docs of dispatch() function](https://redux.js.org/api/store#dispatch)

Dispatches an action. This is the only way to trigger a state change.

The store's reducing function will be called with the current getState() result and the given action synchronously. Its return value will be considered the next state. It will be returned from getState() from now on, and the change listeners will immediately be notified.

A Note for Flux Users

### [A more detailed use-cases and nice official ducumentation on mapDispatchToProps()](https://gist.github.com/heygrady/c6c17fc7cbdd978f93a746056f618552)

### Some more resources

1> [https://www.youtube.com/watch?v=3MEEmJ1h0oY&t=252s](https://www.youtube.com/watch?v=3MEEmJ1h0oY&t=252s)
