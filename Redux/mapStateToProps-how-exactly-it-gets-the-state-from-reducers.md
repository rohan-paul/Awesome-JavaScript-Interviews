##### How exactly does mapStateToProps know which is the state variable that I am talking about. In other words, when I have many reducers file how each component, will get its specific states from mapStateToProps()

Lets say I have a module (among many ) called Tidal in my App, that will get and render tidal data.

##### So here's part of the ../actions/tidalActions.js file (There will be many other action file as well for all other modules of the app)

```js
import {
  FETCH_ALL_TIDES,
  FETCH_CURRENT_TIDES,
  FETCH_CURRENT_WEEK_TIDES
} from "./types";

export const getAllTides = () => async dispatch => {
  const res = await axios.get("/api/tidal/alltides");
  dispatch({ type: FETCH_ALL_TIDES, payload: res.data });
};

export const getCurrentDateTides = () => async dispatch => {
  const res = await axios.get("/api/tidal/currentdate");
  dispatch({ type: FETCH_CURRENT_TIDES, payload: res.data });
};

export const getCurrentWeekTides = () => async dispatch => {
  const res = await axios.get("/api/tidal/currentweek");
  dispatch({ type: FETCH_CURRENT_WEEK_TIDES, payload: res.data });
};
```

##### Here's part of the reducer file - ../reducers/tidalReducers.js - (there will be many other reducers for the other modules of the app)

```js
import {
  FETCH_CURRENT_TIDES,
  FETCH_CURRENT_WEEK_TIDES,
  FETCH_ALL_TIDES
} from "../actions/types";

const initialState = {
  list: [],
  currentDate: [],
  currentWeek: []
};

export default function(state = initialState, actions) {
  switch (actions.type) {
    case FETCH_ALL_TIDES:
      return { ...state, list: actions.payload };
    case FETCH_CURRENT_TIDES:
      return { ...state, currentDate: actions.payload };
    case FETCH_CURRENT_WEEK_TIDES:
      return { ...state, currentWeek: actions.payload };
    default:
      return state;
  }
}
```

##### And finally here the root-reducer file - ../reducers/index.js - which will return all the reducers file's results through the combineReducers() function.

```js
import { combineReducers } from "redux";
import galleryReducers from "./galleryReducers";
import tidalReducers from "./tidalReducers";
import documentReducers from "./documentReducers";
import tariffReducers from "./tariffReducers";
import projectReducers from "./projectReducers";

export default combineReducers({
  tides: tidalReducers,

  documents: documentReducers,

  gos: goReducers,

  tariffs: tariffReducers,

  gallery: galleryReducers,

  project: projectReducers
});
```

See, that for each of the reducers, I am returning the state object specifying a single variable as the key. So for the tidalReducers, I am returning the key as 'tides'

#### And thats the most important point

Now in the relevant tidal component - say its name is TidalList.js I need to have access to the to the three states from store, that tidalReducers is returning

```
const initialState = {
list: [],
currentDate: [],
currentWeek: []
};
```

SO I PULL IN THE 'tides' VARIABLE WITH mapStateToProps() as below - NOTE, I HAVE TO HAVE THE ARGUMENT OF mapStateToProps() withing the curly braces to match exactly what the root-reducer returned inside combineReducers function - i.e. inside ../reducers/index.js file

```js
const mapStateToProps = ({ tides }) => {
  return { tides: tides.currentWeek };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCurrentWeekTidesDispatch: () => {
      dispatch(getCurrentWeekTides());
    },
    deleteTide,
    dispatch
  };
};

TidalsList.propTypes = {
  tides: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TidalsList));
```

With respect to the above here's what the [official documentation](https://redux.js.org/recipes/structuring-reducers/using-combinereducers#defining-state-shape) says

**Defining State Shape**

There are two ways to define the initial shape and contents of your store's state. First, the createStore function can take preloadedState as its second argument. This is primarily intended for initializing the store with state that was previously persisted elsewhere, such as the browser's localStorage. The other way is for the root reducer to return the initial state value when the state argument is undefined. These two approaches are described in more detail in Initializing State, but there are some additional concerns to be aware of when using combineReducers.

**combineReducers takes an object full of slice reducer functions, and creates a function that outputs a corresponding state object with the same keys. This means that if no preloaded state is provided to createStore, the naming of the keys in the input slice reducer object will define the naming of the keys in the output state object.**
