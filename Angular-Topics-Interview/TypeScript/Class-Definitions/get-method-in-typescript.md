#### Getters and setters

They are part of good old Javascript. Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:

```ts
let obj = {
    get propName() {
        // getter, the code executed on getting obj.propName
    },

    set propName(value) {
        // setter, the code executed on setting obj.propName = value
    }
};
```

TS offers getters and setters which allow object properties to have more control of how they are accessed (getter) or updated (setter) outside of the object. Instead of directly accessing or updating the property a proxy function is called.

Accessor with a get and no set property are automatically assumed to be read-only no need for manual work. This is helpful when we are generating a .d.ts file from our code.

get() is an instance method of typescript class.

Note, instance members of the class, those that show up on the object when it’s instantiated.

```ts
class Person {
    constructor(name: string) {
        this._name = name;
    }

    private _name: string;

    get name() {
        return this._name;
    }

    // first checks the length of the name and then updates the name.
    set name(name: string) {
        if (name.length > 10) {
            throw new Error("Name has a max length of 10");
        }

        this._name = name;
    }

    doStuff() {
        this._name = "foofooooooofoooo";
    }
}

const person = new Person("Willem");

// doesn't throw error, setter function not called within the object method when this._name is changed
person.doStuff();

// throws error because setter is called and name is longer than 10 characters
person.name = "barbarbarbarbarbar";
```

Note the different way doStuff() is invoked vs `person.name`
