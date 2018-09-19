## Passing simple Props from Parent to Child — where the prop is not a function

Inside the parent component, just do ``<ChildComponent propName={this.props.propName} />`` and then inside the child component just do ``{this.props.propName}``

[Implemented example](https://github.com/rohan-paul/React-snippets/blob/master/Wrapper-Component-Print-Users-Followers-With-Webpack-Setup/src/App.js)

```js
class App extends React.Component {
    render () {
        return (
            <div>
                <Profile
                    name={this.props.profileData.name}
                    imgURL={this.props.profileData.imgURL}/>
                <Followers
                    followerList={this.props.profileData.followerList} />
            </div>
        );
    }
};

class Profile extends React.Component {
    render () {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <img src={this.props.imgURL} />
            </div>
        );
    }
};

class Followers extends React.Component {
    render () {
        var followers = this.props.followerList.map(function(follower, index){
            return (<li key={index}>{follower}</li>);
        });

        return (
            <div>
                <h5>My followers:</h5>
                <ul>
                    {followers}
                </ul>
            </div>
        );
    }
};
```

## Child to Parent — Use a callback and states

### For passing from child to parent - pass one callback function from parent to child and then use this passed-down function in the child to send something back to parent.

Same tutorial - https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17

### A> Define a callback in my parent which takes the data I need in as a parameter.

### B> Pass that callback as a prop to the child (just like the way in Point no-1 above) - this is it will be a regular prop passing from parent to child.

### C> Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.


Here’s what that might look like if I had data in **ToDoItem** (the Child Component) that I need to access in **ToDoList**(The parent Component) : And the data that **ToDoList** will receive from the child **ToDoItem** is given a variable name **listInfo** for example.

```js
// Parent component
class ToDoList extends React.Component {

    myCallback = (dataFromChild) => {
     //  [...we will use the dataFromChild here...]
    },
    render() {
        return (
            <div>
                 <ToDoItem callbackFromParent={this.myCallback}/>
            </div>
        );
    }
}

// Now from within ToDoItem (The Child Component) we can pass something to callbackFromParent (the prop that was given the value or assigned the value of the CB function that was defined in the parent ) :

// Child component
class ToDoItem extends React.Component{
    someFn = () => {
        // [...somewhere in here I define a variable listInfo which I think will be useful as data in my ToDoList component...]
        this.props.callbackFromParent(listInfo);
    },
    render() {
        [...]
    }
};

```


## Another Implementation of the above concept in below file -

[https://github.com/rohan-paul/Fetch-Github-Profile/blob/master/simple-version-without-using-redux/src/App.js](https://github.com/rohan-paul/Fetch-Github-Profile/blob/master/simple-version-without-using-redux/src/App.js)

******************
App.js is Parent and SearchProfile and Profile are the children.

Define a callback in my parent which takes the data I need in as a parameter.

Pass that callback as a prop to the child (see above).

Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.

fetchProfile() is a callback function defined in parent. This takes the data I need as an argument. But the data will come from the child component SearhProfile

So, I pass this callback function to the child-Component SearchProfile as a prop, with the below line

``<SearchProfile fetchProfileBoundFunction={this.fetchProfile.bind(this)}/>``

  Call the callback (fetchProfileBoundFunction) using this.props.[callback] in the child and pass in the data as the argument.
  So in SearchProfile I do < this.props.fetchProfileBoundFunction(username) >


## Even Another Implementation of the above concept in below file -

[https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Items.js](https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Items.js)

updateSearchTerm() in parent component Items.js - Fundamental explanation why I need it at all - Because, here, my most fundamental need is to change the searchTerm ( the parent state ) to whatever I type. But then, I am updating this searchTerm from the child and passing down 'searchTerm' as a prop from parent to child. And Prop is immutable, so I can not directly change 'searchTerm' in the Filter.js
So, instead I can give the child a function ( updateSearchTerm() in this file ), that the child can call, and that function can manipulate the state.


```js
class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
          };
    }

    updateSearchTerm = searchTerm => {
        this.setState({
            searchTerm
        })
    }
    /* In above, I am using object destructuring syntax. So the single 'searchTerm' is equivalent to doing < searchTerm: searchTerm >  Which effectively means tha I am telling setState 'Hey take the searchTerm argument of updateSearchTerm() function and set them to be the value of the key-value pair of state (which is an object and both the key and the value is called 'searchTerm' ).
    */

    render() {

        const { title, items, onRemove, onToggle } = this.props;

        return (
          <section className="Items">
            <h2>
              {title} ({items.length})
            </h2>
            <Filter searchTerm={this.state.searchTerm} onChange={this.updateSearchTerm} />
            {items
              .filter(item =>
                item.value.toLowerCase().includes(this.state.searchTerm.toLowerCase()),
              )
              .map(item => (
                <Item
                  key={item.id}
                  onToggle={onToggle}
                  onRemove={() => onRemove(item)}
                  item={item}
                />
              ))}
          </section>
        );
      }
    }
```

#### And then in <Filter /> child component, I have the below. SO ITS DATA-DOWN ACTIONS-UP KIND OF FLOW

```js
class Filter extends Component {

// note onChange and searchTerm were the props that were handed-down from Items.js
// and so first to access / consume it inside the child I have to do a this.props
// And because this is a Functional Component without constructor, so I don't need to
// declare super(props) before using this.props
// note the onChange() inside handleChange() is NOT an event attribute but the props passed from parent Items.js to

    handleChange = event => {

        const { onChange } = this.props;

        const value = event.target.value;

        onChange(value)
    }

    render() {

        const { searchTerm } = this.props;

        return (
            <input
                className="Items-searchTerm"
                value={searchTerm}
                onChange={this.handleChange}
                />
        );
    }
}
```

## Further example of data passing from child to parent by invoking a CB (defined in parent ) in child and updating state in parent

[https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/NewItem.js](https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/NewItem.js)

## React component communication

https://www.javascriptstuff.com/component-communication/