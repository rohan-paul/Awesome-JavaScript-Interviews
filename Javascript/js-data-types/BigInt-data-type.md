#### BigInt

BigInts are a new numeric primitive in JavaScript (ES2020) that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

As such, they get their own type that can be detected using the typeof operator:

```js
typeof 123 // → 'number'
typeof 123n // → 'bigint'
```

BigInt is a built-in object that provides a way to represent whole numbers larger than 2^(53) - 1, which is the largest number JavaScript can reliably represent with the Number primitive and represented by the Number.MAX_SAFE_INTEGER constant. BigInt can be used for arbitrarily large integers.

The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary precision. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit for Numbers.

Arbitrary-precision integers unlock lots of new use cases for JavaScript.

BigInts make it possible to correctly perform integer arithmetic without overflowing. That by itself enables countless new possibilities. Mathematical operations on large numbers are commonly used in financial technology, for example.

Large integer IDs and high-accuracy timestamps cannot safely be represented as Numbers in JavaScript. This often leads to real-world bugs, and causes JavaScript developers to represent them as strings instead. With BigInt, this data can now be represented as numeric values.

Because BigInts are a separate type, a BigInt is never strictly equal to a Number, e.g. 42n !== 42. To compare a BigInt to a Number, convert one of them into the other’s type before doing the comparison or use abstract equality (==):

```js
42n === BigInt(42)
// → true
42n == 42
// → true
```

### Further Reading

[https://v8.dev/features/bigint](https://v8.dev/features/bigint)
