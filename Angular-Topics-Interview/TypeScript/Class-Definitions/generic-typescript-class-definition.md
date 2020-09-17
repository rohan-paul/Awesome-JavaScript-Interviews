Before we dive into TypeScript’s private feature let’s do a quick recap of JavaScript classes. In the new ES2015 standard of JavaScript we get a Object Oriented Class style syntax that looks like the following,

```ts
export class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}!`);
    }
}

const cory = new Person("Cory");
cory.sayHello(); // Hello, my name is Cory!
```

In this example above, we are using pure JavaScript no TypeScript syntax or features are being used. JavaScript classes can be exported and used in other JavaScript modules. JavaScript classes also have constructors, properties, and methods similar to most Class-based languages we see today. Unfortunately, in the current version of JavaScript, there is no support for private properties or private methods yet. In JavaScript all class instance properties and methods are public.

### TypeScript Private Properties

Using TypeScript, we can add private functionality into our classes. What are private properties or methods? A private property of method can only be accessed or called from the class instance itself. Let’s take a look at an example private property.

```ts
export class Person {
    // declare our property types
    firstName: string;
    lastName: string;
    private _age: number;

    // when accessing the age property return the private _age
    // getters and setters are part of the JavaScript Class syntax
    get age() {
        return this._age;
    }

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }

    // Only this method can update the private _age
    addOneYear() {
        this._age = this._age + 1;
    }
}

const cory = new Person("Cory", "Rylan", 100);
cory.addOneYear();
console.log(cory.age); // 101

cory._age = 200; // error: Property '_age' is private and only accessible within class 'Person'.
console.log(cory._age); // error: Property '_age' is private and only accessible within class 'Person'.
cory.age = 200; // error: Cannot assign to 'age' because it is a constant or a read-only property.
```

In this example, we are using a typical pattern of a private property to control how a property is updated. In our use case, it is valid to increase the age of a person, but you cannot set it to a random value or a younger age. To enforce this, we create a private property \_age. The \_age property is a property that will be only available internally to the class. For example, if I try to set \_age I get an error because it is private to the class. If I try to read \_age I also get the same error

We can see the private hides the property from the user/consumer of the class. If I try to set cory.age we also get an error because I defined only a get for the age property with no set so this property can only be read-only. We can go one step further and refactor our constructor a little bit more.

#### TypeScript Constructor Assignment

In this example, we can simplify our constructor parameters by combining the declaration and assignment into a single statement.

```ts
export class Person {
    private _age: number;

    get age() {
        return this._age;
    }

    constructor(
        public firstName: string,
        public lastName: string,
        age: number
    ) {
        this._age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }

    addOneYear() {
        this._age = this._age + 1;
    }
}

const cory = new Person("Cory", "Rylan", 100);
cory.sayHello();
```

#### TypeScript Private Methods

Methods can also be private which is useful for hiding implementation detail of how a Class works to the user of the Class. Let’s take a look at a minimal example.

```ts
export class Person {
    private _age: number;

    get age() {
        return this._age;
    }

    constructor(
        public firstName: string,
        public lastName: string,
        age: number
    ) {
        this._age = age;
    }

    // The private method log() can only be called by other methods in our class.
    sayHello() {
        this.log(`Hello, my name is ${this.firstName} ${this.lastName}!`);
    }

    addOneYear() {
        this._age = this._age + 1;
    }

    private log(message) {
        console.log(message);
    }
}

const cory = new Person("Cory", "Rylan", 100);
cory.sayHello(); // Hello, my name is Cory Rylan!
cory.log("hi"); // error: Property 'log' is private and only accessible within class 'Person'.
```

In this example, we created a private method log(). Log can only be called by other methods in our class. You can see above if I try to call log directly, we get a TypeScript error. Private properties and methods can help enforce logic for when data is updated and also enforce encapsulation of our classes. Check out the full working demo in the link below!

#### Further Reading

[https://coryrylan.com/blog/private-methods-and-properties-in-typescript-classes](https://coryrylan.com/blog/private-methods-and-properties-in-typescript-classes)
