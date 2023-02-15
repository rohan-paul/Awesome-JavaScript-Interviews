Typescript allows for non-method properties, similar to this Stage 3 proposal. In fact, declaration of each instance method or property that will be used by the class is mandatory, as this will be used to build up a type for the value of `this` within the class.

So, adding non-method properties to classes in TypeScript is encouraged and required for the type system to understand what is available on the class.

let’s start with a basic example of a TypeScript class:

```ts
class Point {
    static fromOtherPoint(point: Point): Point {
        // ...
    }

    x: number;
    y: number;

    constructor(x: number, y: number) {
        // ...
    }

    toString(): string {
        // ...
    }
}
```

This archetypical class includes a static method, instance properties, and instance methods. When creating a new instance of this type, we’d call new Point(<number>, <number>), and when referring to an instance of this type, we’d use the type Point.
