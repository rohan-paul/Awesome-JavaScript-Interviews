### An example where, for my state-full component, where I am indeed changing the state of the component, but NOT using the constructor.

We’ve all been taught that the constructor is where we initialize our instance properties, state in this case. And thats true till ES-6. However, that is no more true, for the upcoming ES.next class properties proposal.

This code is slight modification from the code in [https://github.com/Kennypee/Weather-Scanner](https://github.com/Kennypee/Weather-Scanner) - that just fetches the weather and renders it.


With it we can now define class properties directly, like this.

```js
class Foo extends Component {
  state = { loading: true };
  ...
}
```

### Babel will transpile your code and add a constructor for you behind the scenes. Here is the output from Babel when we transpile the code snippet above.

```js
class Foo extends Component {
    constructor (...args) {
        var _temp;

        return (_temp = super(...args), (this.state = { loading: true}), _temp )
    }
}

```

#### Note that Babel is actually passing all args — not just props — down to super. It is also taking super’s return value and passing it back to the caller.


