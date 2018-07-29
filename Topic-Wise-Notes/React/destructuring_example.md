## Destructuring in React is useful for both functional and class components but is achieved just a tad bit differently.

### As a general rule use ``const`` instead of ``let`` while destructuring props. Props are not allowed to be mutated. Using ``const`` would prevent reassigning variables which goes against immutable data concepts a little I think? If the variable won’t be reassigned, it should really just be const as that’s its purpose.

Let’s consider a parent component called **Properties** in our application:

```
import React, { Component } from 'react';

class Properties extends Component {

  constructor() {
    super();

    this.properties = [
      {
        title: 'Modern Loft',
        type: 'Studio',
        location: {
          city: 'San Francisco',
          state: 'CA',
          country: 'USA'
        }
      },
      {
        title: 'Spacious 2 Bedroom',
        type: 'Condo',
        location: {
          city: 'Los Angeles',
          state: 'CA',
          country: 'USA'
        }
      },
    ];
  }

render() {
    return (
      <div>
        <Listing listing={this.properties[0]} />
        <Listing listing={this.properties[1]} />
      </div>
    );
  }
}
```

## Functional Child Component implementation passing down the props from above parent ``Properties`` component to child ``Listing`` component
## That is the case, when ``Listing`` is a pure functional component as a child of ``Properties`` component

In this example, we want to pass down a **listing** object from our array of properties for the child component named **Listing** to render.

Here’s how a functional component would look without destructuring :

```
const Listing = (props) => (
  <div>
    <p>Title: {props.listing.title}</p>
    <p>Type: {props.listing.type}</p>
    <p>
      Location: {props.listing.location.city},
      {props.listing.location.state},
      {props.listing.location.country}
    </p>
  </div>
);
```

This block of code is fully functional but looks terrible! By the time we get to this ``Listing`` child component, we already know we’re referencing to a ``listing`` prop, so ``props.listing`` looks and feels redundant. This block of code can be made to look much cleaner through destructuring.

We can achieve this in the function parameter as we pass in the props argument:

```js
const Listing = ({ listing }) => (
  <div>
    <p>Title: {listing.title}</p>
    <p>Type: {listing.type}</p>
    <p>
      Location: {listing.location.city},
      {listing.location.state},
      {listing.location.country}
    </p>
  </div>
);
```
**The reason for ({ listing }) i.e. wrapping ``listing`` in a parentheis** -   I am passing the ``listing`` prop which is an object (being extracted from the Parent compoenet Property's ``properties`` array) -  And when returning an Object, I will have to wrap it in parentheses. Hence the parenthesis before the curly braces. Just like in a ``mapStateToProps`` function.

Even better, we can further destructure nested objects like below:

```js
const Listing = ({
  listing: {
    title,
    type,
    location: {
      city,
      state,
      country
    }
  }
}) => (
  <div>
    <p>Title: {title}</p>
    <p>Type: {type}</p>
    <p>Location: {city}, {state}, {country}</p>
  </div>
);
```

Can you see how much easier this is to read? In this example, we’ve destructured both listings and the keys inside listing.

## Class Child Component implementation passing down the props from above parent ``Properties`` component to child ``Listing`` component
## That is the case, when ``Listing`` is a class component as a child of ``Properties`` component

The idea is very much the same in class components, only here, I have to use render() and return() syntax while declaring the de-structured ``listing`` prop inside the ``render()``. Also, I can destructure the Component object as I import React in class components. This isn’t necessary for functional components as we won’t be extending the Component class for those.

```js
import React, { Component } from 'react';

class Listing extends Component {

  render() {

    const {
      listing: {
        title,
        type,
        location: {
          city,
          state,
          country
        }
      }
    } = this.props;

return (
      <div>
        <p>Title: {title}</p>
        <p>Type: {type}</p>
        <p>
          Location: {city}, {state}, {country}
        </p>
      </div>
    )
  }
}
```
**Differences with Functional Component** - Instead of destructuring in the argument ( like I did in the functional ), I destructure wherever the variables are being called. For example, here in ``Listing`` child component I destructured in the ``render()`` function where the props are being referenced.

