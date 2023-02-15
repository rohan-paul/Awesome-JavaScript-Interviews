# Parent to Child — Use Prop

This is the easiest direction in React to transfer data. If I have access to data in my parent component that I need my child component to have access to, I can pass it as a prop to the child when I instantiate it within the parent.

In my example, if I need to pass something from the parent App Component to the ToDoList Child component:

```js
class App extends React.Component {
  render() {
    // [... somewhere in here I define a variable listName which I think will be useful as data in my ToDoList component...]

    return (
      <div>
        <InputBar />
        <ToDoList listNameFromParent={listName} />
      </div>
    );
  }
}
```

Then in the ToDoList child component I will access / consume the passed-in data from parent like below

```js
class ToDoList extends React.Component {
  render() {
    const { listNameFromParent } = this.props;
    return (
      <div>
        <ul>{listNameFromParent}</ul>
      </div>
    );
  }
}
```

## However if the above ToDoList child-component was declared as a ES6-Class component with a constructor - We had to call super(props) inside the constructor BEFORE BEING ABLE TO use this.props

### The reason why this cannot be allowed before super() is because this is uninitialized if super() is not called. However even if we are not using `this` we need a super inside a constructor because ES6 class constructors MUST call super if they are subclasses. Thus, you have to call super() as long as you have a constructor. (But a subclass does not have to have a constructor).

#### Another example of passing data from parent to child

```js
// RecipeList is the parent - note I am passing 5 props down to child

class RecipeList extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        {this.props.recipes.map((item, index) => (
          <Recipe
            key={index}
            title={item.title}
            ingredients={item.ingredients}
            instructions={item.instructions}
            img={item.img}
          />
        ))}
      </div>
    );
  }
}

// And then Recipe is the child - note,

class Recipe extends Component {
  render() {
    const { title, img, instructions } = this.props;

    const ingredients = this.props.ingredients.map((ing, index) => (
      <li key={index}>{ing}</li>
    ));

    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          {" "}
          <img src={img} alt={title} />{" "}
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">Reciepe {title}</h3>
          <ul> {ingredients} </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>
    );
  }
}
```

## Another Example - Passing simple Props from Parent to Child — where the prop is not a function

Inside the parent component, just do `<ChildComponent propName={this.props.propName} />` and then inside the child component just do `{this.props.propName}`

[Implemented example](https://github.com/rohan-paul/React-snippets/blob/master/Wrapper-Component-Print-Users-Followers-With-Webpack-Setup/src/App.js)

```js
class App extends React.Component {
  render() {
    return (
      <div>
        <Profile
          name={this.state.profileData.name}
          imgURL={this.state.profileData.imgURL}
        />
        <Followers followerList={this.state.profileData.followerList} />
      </div>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <img src={this.props.imgURL} />
      </div>
    );
  }
}

class Followers extends React.Component {
  render() {
    var followers = this.props.followerList.map(function(follower, index) {
      return <li key={index}>{follower}</li>;
    });

    return (
      <div>
        <h5>My followers:</h5>
        <ul>{followers}</ul>
      </div>
    );
  }
}
```

## React component communication

https://www.javascriptstuff.com/component-communication/

### Basic Theory - https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17

Also my somewhat detailed-comments in code - [https://github.com/rohan-paul/Fetch-Github-Profile/blob/master/simple-version-without-using-redux/src/App.js](https://github.com/rohan-paul/Fetch-Github-Profile/blob/master/simple-version-without-using-redux/src/App.js)

#### And a great live example [https://jsbin.com/tipixiy/edit?js,output](https://jsbin.com/tipixiy/edit?js,output)
