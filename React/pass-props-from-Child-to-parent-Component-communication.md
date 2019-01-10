## Child to Parent — Use a callback and states

We need a way for the child component to tell the parent component to update without breaking one-way data flow. Since we are using local state, we need a way for the child component to tell the parent component to call setState. One way to solve this is to create a function in the parent component and add it as a property on the object passed to our render prop. Then whenever the child component needs to update state, it calls this function.

This function then executes in the parent context and calls setState. Once setState is run, if any state value has changed, those new values propagate down into our render prop and the child component now receives the new value.

### For passing from child to parent - pass one callback function from parent to child and then use this passed-down function in the child to send something back to parent.

Same tutorial - https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17

### A> Define a callback in my parent which takes the data I need in as a parameter.

### B> Pass that callback as a prop to the child.

### C> Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.

Here’s what that might look like if I had data in **ToDoItem** (the Child Component) that I need to access in **ToDoList**(The parent Component) : And the data that **ToDoList** will receive from the child **ToDoItem** is given a variable name **listInfo** for example.

```js
// Parent component
class ParentToDoList extends React.Component {

    myCallback = (dataFromChild) => {
     //  [...we will use the dataFromChild here...]
    },
    render() {
        return (
            <div>
                 <ChildToDoItem callbackFromParent={this.myCallback}/>
            </div>
        );
    }
}

// Now from within ToDoItem (The Child Component) we can pass something to callbackFromParent (the prop that was given the value or assigned the value of the CB function that was defined in the parent ) :

// Child component
class ChildToDoItem extends React.Component {
    someFn = () => {
        // [...somewhere in here I define a variable listInfo which I think will be useful as data in my ToDoList component...]
        this.props.callbackFromParent(listInfo);
    },
    render() {
        [...]
    }
};

```

ToDoList will now be able to use listInfo within it’s myCallback function!

### But what if I want to use 'listInfo' in a different function within ToDoList, not just in myCallback so I get 'listInfo' as a regular variable in the parent component ? With the above implementation, I would only have access as a parameter passed into that one specific method.

#### Easy: set this parameter as a state within ToDoList. You can almost think of it as creating a variable within the scope of ToDoList that all the methods within that component can access. In that case my code defining ToDoList might look something like:

```js
class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listDataFromChild: null
        };
    },
    myCallback = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    },
    otherFn = () => {
       // ..within this other function now I still have access to this.state.listDataFromChild...
    }
    render() {
        return (
            <div>
                 <ToDoItem callbackFromParent={this.myCallback}/>
                 [...now here I can pass this.state.listDataFromChild as a prop to any other child component...]

            </div>
        );
    }
});

```

## Another Implementation of the above concept in below file -

[https://github.com/rohan-paul/Fetch-Github-Profile/blob/master/simple-version-without-using-redux/src/App.js](https://github.com/rohan-paul/Fetch-Github-Profile/blob/master/simple-version-without-using-redux/src/App.js)

---

App.js is Parent and SearchProfile and Profile are the children.

Define a callback in my parent which takes the data I need in as a parameter.

Pass that callback as a prop to the child (see above).

Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.

fetchProfile() is a callback function defined in parent. This takes the data I need as an argument. But the data will come from the child component SearhProfile

So, I pass this callback function to the child-Component SearchProfile as a prop, with the below line

`<SearchProfile fetchProfileBoundFunction={this.fetchProfile.bind(this)}/>`

Call the callback (fetchProfileBoundFunction) using this.props.[callback] in the child and pass in the data as the argument.
So in SearchProfile I do < this.props.fetchProfileBoundFunction(username) >

## Even Another Implementation of the above concept in below file -

[https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Items.js](https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Items.js)

updateSearchTerm() in parent component Items.js - Fundamental explanation why I need it at all - Because, here, my most fundamental need is to change the searchTerm ( the parent state ) to whatever I type. But then, I am updating this searchTerm from the child and passing down 'searchTerm' as a prop from parent to child. And Prop is immutable, so I can not directly change 'searchTerm' in the Filter.js
So, instead I can give the child a function ( updateSearchTerm() in this file ), that the child can call, and that function can manipulate the state.

// parent component

```js
class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
  }

  updateSearchTerm = searchTerm => {
    this.setState({
      searchTerm
    });
  };
  /* In above, I am using object destructuring syntax. So the single 'searchTerm' is equivalent to doing < searchTerm: searchTerm >  Which effectively means tha I am telling setState 'Hey take the searchTerm argument of updateSearchTerm() function and set them to be the value of the key-value pair of state (which is an object and both the key and the value is called 'searchTerm' ).
   */

  render() {
    const { title, items, onRemove, onToggle } = this.props;

    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter
          searchTerm={this.state.searchTerm}
          onChange={this.updateSearchTerm}
        />
        {items
          .filter(item =>
            item.value
              .toLowerCase()
              .includes(this.state.searchTerm.toLowerCase())
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

#### The flow of data passing from child to parent is as below

### A> onChange() is passed from parent to child.

### B> event.target.value is triggerd in the Child whenever the user types something in the input field.

### C> This event.target.value is captured in the 'value' variable and passed as the argument to onChange() - the function that was passed from parent to child. And onChange() is also invoked as soon as user starts typing something in the input filed.

### C> And now 'updateSearchTerm' is executed in parent as well > setState() executed > and parent's state gets changed.

// child component

```js
class Filter extends Component {
  // note onChange and searchTerm were the props that were handed-down from Items.js
  // and so first to access / consume it inside the child I have to do a this.props
  // And because this is a Functional Component without constructor, so I don't need to
  // declare super(props) before using this.props
  // the onChange() inside handleChange() is NOT an 'onChange' event attribute but the props passed from parent Items.js to Filter.js
  // but the onChange inside return() within the <input/> element is the onChange event attribute.

  handleChange = event => {
    const { onChange } = this.props;
    const value = event.target.value;
    onChange(value);
  };

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

### Further Sources / Reading

#### 1> Example of data passing from child to parent by invoking a CB (defined in parent ) in child and updating state in parent

[https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/NewItem.js](https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/NewItem.js)

#### 2> React component communication

https://www.javascriptstuff.com/component-communication/

#### 3> Simple example of passing function (a function that has a setState() it it) from parent to child and invoking it in the child - thereby triggering state change in the parent (e.g. on button-click in the child)

[https://www.youtube.com/watch?v=AnRDdEz1FJc](https://www.youtube.com/watch?v=AnRDdEz1FJc)
