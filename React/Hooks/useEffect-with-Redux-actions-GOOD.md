#### How to dispatch an redux action to load data inside useEffect on page load (like I would do under componentDidMount in a class based component)

**Index.js**

```js
const store = createStore(rubricReducer, applyMiddleware(thunk));
ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Provider store={store}>
      {" "}
      <App />{" "}
    </Provider>
  </BrowserRouter>,
  rootElement
);
```

**Rubrics.tsx- The main component to render**

```js
const Rubrics = props => {
  const { getRubrics, loading, error } = props;

  // You should always add elements inside your render scope
  // to the second array parameter of useEffect to prevent unexpected bugs.
  useEffect(() => {
    getRubrics();
  }, [getRubrics]);

  if (error) {
    return <div>Error! {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      <React.Fragment>
        {rubrics.map(rubric => {
          return <li key={rubric.id}>{rubric.title}</li>;
        })}
      </React.Fragment>
    </ul>
  );
};

const mapStateToProps = state => ({
  rubrics: state.rubrics.items,
  loading: state.rubrics.loading,
  error: state.rubrics.error
});

// THIS IS INCORRECT WAY
// const mapDispatchToProps = dispatch => {
//   return {
//     getRubrics: () => dispatch(fetchRubrics())
//   };
// };

// THIS IS CORRECT WAY - Now you won't be creating a new object every time your component re-renders
const mapDispatchToProps = {
  getRubrics: fetchRubrics
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rubrics);
```

**rubricActions.tsx:**

```js
export function fetchRubrics() {
  return dispatch => {
    dispatch(fetchRubricsBegin());

    axios
      .get("api/Rubric/Index")
      .then(response => {
        console.log("success: reading rubrics");

        dispatch(fetchRubricsSuccess(response.data));
        return response.data;
      })
      .catch(error => {
        fetchRubricsFailure(error);
      });
  };
}

export const FETCH_RUBRICS_BEGIN = "FETCH_RUBRICS_BEGIN";
export const FETCH_RUBRICS_SUCCESS = "FETCH_RUBRICS_SUCCESS";
export const FETCH_RUBRICS_FAILURE = "FETCH_RUBRICS_FAILURE";

const fetchRubricsBegin = () => ({
  type: FETCH_RUBRICS_BEGIN
});

const fetchRubricsSuccess = rubrics => ({
  type: FETCH_RUBRICS_SUCCESS,
  payload: { rubrics }
});

const fetchRubricsFailure = error => ({
  type: FETCH_RUBRICS_FAILURE,
  payload: { error }
});
```

**rubricReducer.tsx :**

```js
import {
  FETCH_RUBRICS_BEGIN,
  FETCH_RUBRICS_SUCCESS,
  FETCH_RUBRICS_FAILURE
} from "../_actions/rubricActions";

const initialState = {
  rubrics: [],
  loading: false,
  error: null
};

const rubricReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RUBRICS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_RUBRICS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload.rubrics
      };
    case FETCH_RUBRICS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: []
      };
    default:
      return state;
  }
};
export default rubricReducer;
```

#### Further Reading

https://stackoverflow.com/questions/55633900/how-to-dispatch-an-redux-action-to-load-data-inside-useeffect-on-page-load
