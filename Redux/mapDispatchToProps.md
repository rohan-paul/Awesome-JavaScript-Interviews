#### `mapStateToProps()` is a utility which helps your component get updated state(which is updated by some other components),

#### `mapDispatchToProps()` is a utility which will help your component to fire an action event (dispatching action which may cause change of application state)

#### mapDispatchToProps can either be a function or an object.

`mapStateToProps`, `mapDispatchToProps` and `connect` from `react-redux` library provides a convenient way to access your **state** and **dispatch** functions of your store.

In a nutshell, your components are supposed to be concerned only with displaying stuff. The only place they are supposed to get information from is their props.

Separated from "displaying stuff" (components) is:

#### how you get the stuff to display,

#### and how you handle events.

#### That is what containers are for.

Therefore, a "well designed" component in the pattern look like this:

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

I wonder if you can see, now that it's the container [1] that knows about redux and dispatch and store and state and ... stuff.

The component in the pattern, FancyAlerter, which does the rendering doesn't need to know about any of that stuff: it gets its method to call at onClick of the button, via its props.

And ... mapDispatchToProps was the useful means that redux provides to let the container easily pass that function into the wrapped component on its props.

All this looks very like the todo example in docs, and another answer here, but I have tried to cast it in the light of the pattern to emphasize why.

(Note: you can't use mapStateToProps for the same purpose as mapDispatchToProps for the basic reason that you don't have access to dispatch inside mapStateToProp. So you couldn't use mapStateToProps to give the wrapped component a method that uses dispatch.
