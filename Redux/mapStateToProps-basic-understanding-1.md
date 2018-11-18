All `mapStateToProps()` does is, it takes a piece from the App's single state-tree i.e. the **store** and turn this into a component prop, so I can use it in this current component as a regular prop.

Let’s see a basic example: you have two components, `DisplayHello` and `DisplayQuestion`. They both need to access the same info, the **nickname** of our user. The basic way (without using `redux` and `mapStateToProps` ) to do that is to propagate props from the root of your app (which maintains a state) as below:

```js
// App.js:

import React, {Component} from 'react';
import DisplayHello from "./DisplayHello";
import DisplayQuestion from "./DisplayQuestion";

class App extends Component {
    state = {
        username: 'ovrsea',
    };

    render() {
        return (
            <div>
                <DisplayHello username={this.state.username}/>
                <DisplayQuestion username={this.state.username}/>
            </div>
        );
    }
}
export default App;

// Now below is DisplayHello.js:
import React, {Component} from 'react';

class DisplayHello extends Component {
    render() {
        return (
            <p>
                Hello {this.props.username} !
            </p>
        );
    }
}
export default DisplayHello;

// And then the DisplayQuestion.js:
import React, {Component} from 'react';

class DisplayQuestion extends Component {
    render() {
        return (
            <div>
                What do you want to order today, {this.props.username} ?
            </div>
        );
    }
}
export default DisplayQuestion;

```

However, it could become heavy to handle if you have a lot of information and/or components. It is not the role of the root to handle your app data ! This is where HOC are useful. We create a component which “pushes” the info to the components which need them ! How does it work ? It is just a function that takes a component as input and returns the same component with new props. The code of this magic trick is below :

```js
// The Higher Order Component
import React, { Component } from 'react'
export default function ourFirstStore(WrappedComponent) {
    return class extends Component {
        state = {
            username: 'ovrsea',
        };

        render() {
            return <WrappedComponent username={this.state.username} {...this.props} />;
        }
    };
}

// Then DisplayHello updated version implemented with HOC:
import React, {Component} from 'react';
import ourFirstStore from "./ourFirstStore";

class DisplayHello extends Component {
    render() {
        return (
            <p>
                Hello {this.props.username} !
            </p>
        );
    }
}
export default ourFirstStore(DisplayHello);


// And now the DisplayQuestion updated version implemented with HOC.
import React, {Component} from 'react';
import ourFirstStore from "./ourFirstStore";

class DisplayQuestion extends Component {
    render() {
        return (
            <div>
                What do you want to order today, {this.props.username} ?
            </div>
        );
    }
}
export default ourFirstStore(DisplayQuestion);


// And the updated App.js now after implementation of the HOC
import React, {Component} from 'react';
import DisplayHello from "./DisplayHello";
import DisplayQuestion from "./DisplayQuestion";

class App extends Component {

    render() {
        return (
            <div>
                <DisplayHello/>
                <DisplayQuestion/>
            </div>
        );
    }
}
export default App;
```

Notice that all the data is now in the wrapper and not in `App.js` anymore. We just created a very basic data store accessible anywhere in your app !

### So now instead of the HOC as above implement `mapStateToProps` - to access your my state from store as props for the current component

The main issue is: your store might be huge, and your component does not need to be aware of all the changes in it. You want to choose which variables are accessed by which component. This is where mapStateToProps comes into action !

Basically, this function tells your component what props will be added. You need `state.username` ? Then add it as `state.username` within `mapStateToProps`
You need the email ? Do the same. The “map” itself is just an object returned by your function.

#### If our state looks like this:

```js
{
    username: ‘initial name’
}
```

### Actually the above state will be coded as below with reducers and combineReducers

#### 1> So first the state will be held in userReducer.js file like below

```js
// userNameReducer.js file

const initialState = {
  usernames: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_USERNAMES:
      return {
        ...state,
        usernames: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
```

Then the above reducer will be combined along with other reducers in a separate index.js (which index.js file will later be imported as rootReducer in the store.js file of the app ) file within the reducers folder structure as below

```js
// This is my rootReducer i.e. the index.js file

import { combineReducers } from "redux";
import userNameReducer from "./userNameReducer";

export default combineReducers({
  username: userNameReducer
});
```

The store.js file will then hold the single state-tree of the app as below

```js
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// As I have named my root-reducer as index.js inside ./reducers/ folder, hence no need to mention separately /reducers/index

const initialState = {};

// put any middleware inside an array
const middleware = [thunk];

// For the third argument to createStore(), which takes some optional store enhancers, since I am using redux-tools, I want to wrap the applyMiddleware() in this compose() function.
// To apply multiple store enhancers, you may use compose(). - per official doc - https://redux.js.org/api-reference/createstore

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
```

### Then, our final DisPlayQuestion.js component will be as below

```js
import React, { Component } from "react";
import { connect } from "react-redux";

class DisplayQuestion extends Component {
  render() {
    return (
      <div>What do you want to order today, {this.props.nameAsProps} ?</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    nameAsProps: state.username
  };
}
export default connect(mapStateToProps)(DisplayQuestion);
```

The exact similar working version for a shopping-list CRUD app (just like a To-Do app to do all the CRUD operations ) is in here -[https://github.com/rohan-paul/mern-shopping-list/tree/master/client/src/reducers](https://github.com/rohan-paul/mern-shopping-list/tree/master/client/src/reducers)

### Further Reading

1> [https://medium.com/ovrsea/mapstatetoprops-and-why-you-may-not-need-mapdispatchtoprops-as-a-beginner-dd012a3da5e6](https://medium.com/ovrsea/mapstatetoprops-and-why-you-may-not-need-mapdispatchtoprops-as-a-beginner-dd012a3da5e6)
