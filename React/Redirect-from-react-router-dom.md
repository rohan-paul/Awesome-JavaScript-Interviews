### Redirect Component -

#### ( first as a theory remember that Redirect and history are related )

1> Official Doc - https://reacttraining.com/react-router/web/api/Redirect

Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do. 

2> https://medium.com/@anneeb/redirecting-in-react-4de5e517354a

The easiest way to redirect to a new location is by using its Redirect component. When the component is rendered, the existing location of the history object is replaced with a new location. If you don’t want to override the existing history location, including the push property will push a new entry onto the history.


[Implementation in my Signup-Form-with-Passport repo](https://github.com/rohan-paul/SignUp-Form-with-Passport/blob/master/src/components/navbar.js)

So, basically here in this file, above, if the user is successfully logged-in then inside the handleSubmit() function, I am setting 'redirectTo' to be the home url ('/') and then within the render() function, I am re-directing whatever is the value of  < this.state.redirectTo >

```js
if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        }
```

And if I did not use this Redirect to way of doing this, then I had to use < this.props.history.push('/') >   But that is not ideal, in the case - if the component that needs the redirect functionality is nested super deep - then Passing these props through all the components between the route and your child component is not ideal.


*******************************************

#### Quick note on history.push from ../Curated-List-For-JavaScript-Interviews/React/this.props.history.push.md

The real work horse of React Router is the History library. Under the hood it’s what’s keeping track of session history for React Router.
When a component is rendered by React Router, that component is passed three different props: location, match, and history. This history prop comes from the History library and has a ton of fancy properties on it related to routing. In this case, the one we’re interested is history.push. What it does is it pushes a new entry onto the history stack - **aka redirecting the user to another route**.

Most obvious implementation will be in a handleClick or onSubmit - after clicking / submitting I wanto the user to get redirected to a new URL and also simultaneously add this page to browser history

## react-router Redirect vs history.push

https://stackoverflow.com/questions/48619733/react-router-redirect-vs-history-push

### Redirect

Rendering a <Redirect> will navigate to a new location. The new location will override the current location in the history stack, like server-side redirects (HTTP 3xx) do.

### whereas History

push function Pushes a new entry onto the history stack

https://stackoverflow.com/questions/46757676/in-react-is-it-always-better-to-render-a-redirect-than-use-this-props-history-pu?rq=1

rendering redirects has its negative issues, as it is kind of counterintuitive that you have to render a component in order to change the page however it does provide some clear benefits

so the issue with this.props.history.push() is mostly when you are dealing with child components that are triggering redirects

Component A # the one Rendered by the Route
  Component B
    Component C # the one triggering the redirect

### in the example above, unless you are diligent with passing down the route props from Component A down to Component C, then you wouldn't be able to use history.push() in Component C

Rendering Redirect was supposed to be the answer to that scenario that was provided by the maintainer of react-router but some people just dont like the idea at all.

Functioanally speaking, there doesnt seem to be major differences in functionality between Redirect and history.push as Redirect uses it under the hood. The major reason to use Redirect over history.push is that Redirect is future proofed from possible changes on how history would work or if they decide to handle context differently at a later date.
