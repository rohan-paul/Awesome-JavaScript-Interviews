## What is destructuring in the context of React

**1. Very simply its passing an object as an argument to the function, but the destructuring uses only the named properties of the object.**

```js
const destructuring = ({ used }) => console.log(used);

const properties = {
  unused: 1,
  used: 2,
};

destructuring(properties); // => 2
```

### 3. Another example of just saving me 4 characters while writing codes

say I have the below state

```js
state = {
    items: [
    { value: 'Pants', id: uniqueId(), packed: false },
    { value: 'Jacket', id: uniqueId(), packed: false },
    ]
}
```

And now I have to render the state.items - so for that I have to do ``this.state.items`` - BUT with destructuring I can do the below inside render()

```js
render() {
    const { items } = this.state;
    return (
        // codes
    )
}
```

So it saved me just 4 characters.



## Benefits of destructuring - Shorter code

```js
var object = { one: 1, two: 2, three: 3 }

let one = object.one;
let two = object.two;
let three = object.three;

console.log(one, two, three) // prints 1, 2, 3

```
### Now with destructuring, the same code becomes much more clear and shorter

```js
var object = { one: 1, two: 2, three: 3 }

let { once, tow, three } = object

console.log(one, two, three) // prints 1, 2, 3
```

## Benefits of destructuring - Better readable code

Large components often suffer from this.props syndrome. That is to say, you see the phrase this.props all over the place, which unfortunately detracts from readability by acting as a source of extra noise. Take this example of a Product Price component which has a lot of props to render:

```js
render() {
  return (
    <ProductPrice
      hidePriceFulfillmentDisplay=
       {this.props.hidePriceFulfillmentDisplay}
      primaryOffer={this.props.primaryOffer}
      productType={this.props.productType}
      productPageUrl={this.props.productPageUrl}
      inventory={this.props.inventory}
      submapType={this.props.submapType}
      ppu={this.props.ppu}
      isLoggedIn={this.props.isLoggedIn}
      gridView={this.props.isGridView}
    />
  );
}

```
After cutting down all these ``this.props`` noise. The below is much easier to read and clearly points out which props we are using in the component.

```js
render() {
  const {
    hidePriceFulfillmentDisplay,
    primaryOffer,
    productType,
    productPageUrl,
    inventory,
    submapType,
    ppu,
    isLoggedIn,
    gridView
  } = this.props;

  return (
    <ProductPrice
      hidePriceFulfillmentDisplay={hidePriceFulfillmentDisplay}
      primaryOffer={primaryOffer}
      productType={productType}
      productPageUrl={productPageUrl}
      inventory={inventory}
      submapType={submapType}
      ppu={ppu}
      isLoggedIn={isLoggedIn}
      gridView={isGridView}
    />
  );
}

```

This makes sense to do in a large component where the same props might be used multiple times and in several subcomponents, but in this simple example we can use Spread Attributes for a super shortcut:

```js
render() {
    const props = this.props;
    return ( <ProductPrice {...props} /> )
}
```

Stateless Functional Components (as mentioned earlier) make great use of Object Destructuring, since they receive props as an arg:

```js
const ProductPrice = ({
  hidePriceFulfillmentDisplay,
  primaryOffer,
  productType,
  productPageUrl,
  inventory,
  submapType,
  ppu,
  isLoggedIn,
  gridView
}) =>
  <ProductPrice
    hidePriceFulfillmentDisplay={hidePriceFulfillmentDisplay}
    primaryOffer={primaryOffer}
    productType={productType}
    productPageUrl={productPageUrl}
    inventory={inventory}
    submapType={submapType}
    ppu={ppu}
    isLoggedIn={isLoggedIn}
    gridView={isGridView}
  />

  ```
