### Component rendering inside Router

#### If you need to pass a prop to a component being rendered by React Router, instead of using Routes component prop, use its render prop passing it an inline function then pass along the arguments to the element you’re creating.

Post
React Router uses a declarative, component based approach to routing. What that means is when you want to create a new route, you render a Route component. If you’re familiar with React Router you know that to do that, you pass Route a path and a component to render when the app’s location matches that path.

``<Route path='/dashboard' component={Dashboard} />``

Now, what if we also wanted to pass Dashboard a prop? There’s a few different ways to solve this problem but only one right way. The first idea you might have is to just pass it as a prop on Route.

```js
<Route
  path='/dashboard'
  component={Dashboard}
  isAuthed={true}
/>
```
Unfortunately, this won’t work. React Router won’t forward that prop onto the component. Instead, it will just ignore it.

The next idea you might have, and a pattern I’ve seen a few places is to pass component an inline function that creates the element.

```js
<Route
  path='/dashboard'
  component={() => <Dashboard isAuthed={true} />}
/>
```
Though technically this will work, it’s not the best solution. The reason for this is because of performance. According to the offical docs…

### “When you use the component props, the router uses React.createElement to create a new React element from the given component. That means if you provide an inline function to the component attribute, you would create a new component every render. This results in the existing component unmounting and the new component mounting instead of just updating the existing component.”

So if you’re not supposed to pass a function to component, what’s the solution? Turns out the React Router team predicted this problem and gave us a handy solution. Instead of using component, use the render prop. render accepts a functional component and that function won’t get unnecessarily remounted like with component. That function will also receive all the same props that component would receive. So you can take those and pass those along to the rendred component.

```js
<Route
  path='/dashboard'
  render={(props) => <Dashboard {...props} isAuthed={true} />}
/>
```
### So to recap, if you need to pass a prop to a component being rendered by React Router, instead of using Routes component prop, use its render prop passing it an inline function then pass along the arguments to the element you’re creating.

Source: https://tylermcginnis.com/react-router-pass-props-to-components/

#### Another implementation in my little MERN signup form with passport, and bcrypt

[https://github.com/rohan-paul/SignUp-Form-with-Passport/blob/master/src/App.js](https://github.com/rohan-paul/SignUp-Form-with-Passport/blob/master/src/App.js)

```js
render() {
    return (
      <div className="App">

        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Join the party, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          component={Home} />
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />

      </div>
    );
  }
  ```