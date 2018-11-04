Syntax for declaring, exporting and importing of pure functional component.

## 1-st Option

```js
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/api/auth/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoutes;
```

Then importing it to another component like below

`import ProtectedRoutes from "./ProtectedRoutes";`

## 2-nd Option

```js
import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? (
          <Component {...props} {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/api/auth/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
```

Then importing it to another component like below

`import { ProtectedRoutes } from "./ProtectedRoutes";`

#### ES6 doesn't allow export default const. You must declare the constant first then export it:

```js
const Header = () => {
  return <pre>Header</pre>;
};

export default Header;
```

This constraint exists to avoid writting export default a, b, c; that is forbidden: only one variable can be exported as default
