#### Property Decorator

**With a property decorator, you can change the value that is in a property at runtime. The property decorator is declared before the property declaration. It cannot be used in a declaration file or used in combination with a declare statement. The property decorators can change the value that comes out of the class properties.**

Another example - This is how you would use a property decorator:

```ts
@elfDec
class PlayerCharacter {
  @playerNameEmoji
  public name: string = "Player name"
}
```

Let’s create our player name emoji decorator to add an emoji after the player’s name based on the player type:

```ts
function playerNameEmoji() {
  return function (target: any, key: string | symbol) {
    let val = target[key]

    const getEmoji = (type: string) => {
      let val: string = ""
      switch (type) {
        case "hobbit":
          val = "🧙‍♂️"
          break

        case "elf":
          val = "🧝"
          break
      }
      return val
    }

    const getter = function () {
      return `${val} ${getEmoji(this.type)}`
    }
    const setter = (next: any) => {
      console.log("set: ", this)
      val = next
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    })
  }
}
```

**Getter**
The getter function is for getting the property value of the class where you used the property decorator. Inside this function, we have access to the instance of the class. In the return statement, we return the label, which includes the value of that property.

**defineProperty**

Finally, we have an accessor descriptor **Object.defineProperty()** in the property decorator.

According to MDN web docs, **“An accessor descriptor is a property described by a getter-setter pair of functions.”**

This descriptor will describe how our property will behave inside a class.

Inside the descriptor, we can have a getter and setter method. They will be executed when you want to get the value or change (i.e. set) it.

The static method **Object.defineProperty()** defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

#### Syntax - Object.defineProperty(obj, prop, descriptor)

**obj** - The object on which to define the property.

**prop** - The name or Symbol of the property to be defined or modified.

**descriptor** - The descriptor for the property being defined or modified.

**Setter**

With the setter, we can change the value of the class property’s instance. In this case, I didn’t change it but added an emoji to it.
When we try to add the emoji there, which sounds very logical to me, we would get an error. This is because we don't have access to the whole instance of the class in the setter.

Inside the descriptor, we have a getter and setter method. They will be executed when you want to get the value or change it. Next to that, we set the enumerable to true. This will make sure it's visible during the enumeration of the corresponding object.
According to MDN web docs, “An accessor descriptor is a property described by a getter-setter pair of functions.”

#### Further Reading

[https://medium.com/better-programming/an-introduction-to-typescript-property-decorators-1c9db23b6ca1](https://medium.com/better-programming/an-introduction-to-typescript-property-decorators-1c9db23b6ca1)
