# How Props are passed - 16May2018

### Basic Theory - https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17

Also Read my live detailed-comments in code - [https://github.com/rohan-paul/Fetch-Github-Profile/blob/master/simple-version-without-using-redux/src/App.js](https://github.com/rohan-paul/Fetch-Github-Profile/blob/master/simple-version-without-using-redux/src/App.js)

# 1> Parent to Child — Use Prop

This is the easiest direction in React to transfer data. If I have access to data in my parent component that I need my child component to have access to, I can pass it as a prop to the child when I instantiate it within the parent.

In my example, if I need to pass something from the parent App Component to the ToDoList Child component:

```js
class App extends React.Component {
    render() {
    // [... somewhere in here I define a variable listName which I think will be useful as data in my ToDoList component...]

        return (
            <div>
                 <InputBar/>
                 <ToDoList listNameFromParent={listName}/>
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

#### Another example of passing data from parent to chile

```js

// RecipeList is the parent - note I am passing 5 props down to child

class RecipeList extends Component{
    render(){
        return (
            <div style={{'display':'flex'}}>
                {this.props.recipes.map((item,index)=>(
                    <Recipe key={index}
                        title={item.title}
                        ingredients={item.ingredients}
                        instructions={item.instructions}
                        img={item.img}
                    />
                ))}
            </div>
        )
    }
}

// And then the child - note, 

class Reciepe extends Component{

    render(){

        const { title, img, instructions } = this.props;

        const ingredients=this.props.ingredients.map((ing,index)=>(<li key={index} >{ing}</li>));
        
        return (
            <div className='recipe-card'>
                <div className='recipe-card-img'> <img src={img} alt={title}/> </div>
                <div className='recipe-card-content'>
                    <h3 className='recipe-title'>Reciepe {title}</h3>
                    <ul> {ingredients} </ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                </div>
            </div>
        )
    }
}

```


# 2> Child to Parent — Use a callback and states

## For passing from child to parent - pass one callback function from parent to child and then use this passed-down function in the child to send something back to parent.

Same tutorial - https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17

### A> Define a callback in my parent which takes the data I need in as a parameter.

### B> Pass that callback as a prop to the child (just like the way in Point no-1 above) - this is it will be a regular prop passing from parent to child.

### C> Call the callback using this.props.[callback] in the child (insert your own name where it says [callback] of course), and pass in the data as the argument.




Here’s what that might look like if I had data in **ToDoItem** (the Child Component) that I need to access in **ToDoList**(The parent Component) : And the data that **ToDoList** will receive from the child **ToDoItem** is given a variable name **listInfo** for example.

```js
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


## Another Implemented of the above concept in below file -

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


## React component communication

https://www.javascriptstuff.com/component-communication/