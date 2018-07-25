## What is destructuring in the context of React

**Very simply its passing an object as an argument to the function, but the destructuring uses only the named properties of the object.**

```
const destructuring = ({ used }) => console.log(used);

const properties = {
  unused: 1,
  used: 2,
};

destructuring(properties); // => 2
```

## Benefits of destructuring - Shorter code

```
var object = { one: 1, two: 2, three: 3 }

let one = object.one;
let two = object.two;
let three = object.three;

console.log(one, two, three) // prints 1, 2, 3

```
### Now with destructuring, the same code becomes much more clear and shorter

```
var object = { one: 1, two: 2, three: 3 }

let { once, tow, three } = object

console.log(one, two, three) // prints 1, 2, 3
```

## Benefits of destructuring - Better readable code

Large components often suffer from this.props syndrome. That is to say, you see the phrase this.props all over the place, which unfortunately detracts from readability by acting as a source of extra noise. Take this example of a Product Price component which has a lot of props to render:

```render() {
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

```
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

```
render() {
    const props = this.props;
    return ( <ProductPrice {...props} /> )
}
```

Stateless Functional Components (as mentioned earlier) make great use of Object Destructuring, since they receive props as an arg:

```
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
