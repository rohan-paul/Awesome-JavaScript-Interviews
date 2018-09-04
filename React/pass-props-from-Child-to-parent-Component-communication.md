# Child to Parent — Use a callback and states

## For passing from child to parent - pass one callback function from parent to child and then use this passed-down function in the child to send something back to parent.

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

// Chile component
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
Define a callback in my parent which takes the data I need in as a parameter.

Pass that callback as a prop to the child (see above).

Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.

fetchProfile() is a callback function defined in parent. This takes the data I need as an argument. But the data will come from the child component SearhProfile

So, I pass this callback function to the child-Component SearchProfile as a prop, with the below line

<SearchProfile fetchProfileBoundFunction={this.fetchProfile.bind(this)}/>

  Call the callback (fetchProfileBoundFunction) using this.props.[callback] in the child and pass in the data as the argument.
  So in SearchProfile I do < this.props.fetchProfileBoundFunction(username) >


## Even Another Implementation of the above concept in below file -

[https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Items.js](https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/Items.js)

updateSearchTerm() in parent component Items.js - Fundamental explanation why I need it atl - Because, here, my most fundamental need is to change the searchTerm ( the parent state ) to whatever I type. But then, I am updating this searchTerm from the child and passing down 'searchTerm' as a prop from parent to child. And Prop is immutable, so I can not directly change 'searchTerm' in the Filter.js
So, instead I can give the child a function ( updateSearchTerm() in this file ), that the child can call, and that function can manipulate the state.

SO ITS DATA DOWN ACTIONS UP KIND OF FLOW

## Further example of data passing from child to parent by invoking a CB (defined in parent ) in child and updating state in parent

[https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/NewItem.js](https://github.com/rohan-paul/check-pack-items-before-travel/blob/master/src/components/NewItem.js)

## React component communication

https://www.javascriptstuff.com/component-communication/