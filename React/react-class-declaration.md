## There is no difference between ``export default class Book extends Component`` VS

## ``export default Book``

```js

 export default class BookingTabs extends Component {
  render() {
    return (
    );
  }
}
```

And the second way

```js
class Book extends Component {
  render() {
    return (
    );
  }
}
export default Book

```

There is no difference between the two above. They are equally efficient. It's a matter of coding style and preference.
Which one take less time? - Ans is - Given my target is for browsers which does not understand ES6 modules (import/export) natively. The compiled code is the same.

### Some use case preference between the two above

1> Wen I want to use some high order component I should use second one. for example I want use "connect" for redux applications. I have to write

```js
class Book extends Component {
  render() {
    return (
    );
  }
}
export default connect(Book)
```

2> No. 2 gives possibilities for further working with the class before exporting it. Such as adding proptypes Book.propTypes = { /* prop-types definition */}