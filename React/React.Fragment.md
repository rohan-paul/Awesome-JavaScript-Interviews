#### React Fragment
All return values need to be wrapped in a div. This is because a component can only return one single element, and if you want more than one, you need to wrap it with another container tag.

This, however, causes an unnecessary div in the output. You can avoid this by using React.Fragment:

```js
import React, { Component } from 'react'
class BlogPostExcerpt extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </React.Fragment>
    )
  }
}
````
which also has a very nice shorthand syntax <></> that is supported only in recent releases (and Babel 7+):

```js
import React, { Component } from 'react'
class BlogPostExcerpt extends Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </>
    )
  }
}
```