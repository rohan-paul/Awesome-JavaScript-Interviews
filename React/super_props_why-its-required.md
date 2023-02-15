## super is called inside a react component only if it has a constructor. For example the below code doesn't require super

```js
class App extends React.component {

    render(){

        return <div>Hello { this.props.world }</div>; }

    }
```

// However if we have a constructor then super() is mandatory

```js
class App extends React.component {

constructor(){

console.log(this) //Error: 'this' is not allowed before super() }

}
```

### The reason why this cannot be allowed before super() is because this is uninitialized if super() is not called. However even if we are not using ``this`` we need a super inside a constructor because ES6 class constructors MUST call super if they are subclasses. Thus, you have to call super() as long as you have a constructor. (But a subclass does not have to have a constructor).

## We call super(props) inside the constructor if we have to use this.props for example

```js
class App extends React.component{

    constructor(props){

    super(props);

console.log(this.props); // prints out whatever is inside props }

}

```

[https://www.quora.com/What-are-the-purposes-of-props-and-super-in-React](https://www.quora.com/What-are-the-purposes-of-props-and-super-in-React)