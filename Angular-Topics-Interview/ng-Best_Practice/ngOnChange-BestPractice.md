**ngOnChanges** runs whenever any of the inputs change, if you use setter/getters for the inputs you want to listen to they will only run when that input is being changed.

When it comes to subscribing to property changes in Angular, I think most people would immediately think of **ngOnChanges** lifecycle hook. A typical example looks like this:

```ts
ngOnChanges(changes: SimpleChanges) {
  if (changes.key1) {
      console.log(`key1 is changed from ${changes.key1.previousValue} to ${changes.key1.currentValue}`);
  }
  if (changes.key2) {
    console.log(`key2 is changed from ${changes.key2.previousValue} to ${changes.key2.currentValue}`);
  }
  // ...
}
```

One advantage of ngOnChanges() is that you get all changes at once if your component has several @Input()s.

If your code only depends on a single @Input() a setter is probably the better approach.

Now **ngOnChanges** has the following issues:

It combines change detection of ALL input properties into one ngOnChanges hook function. And then we need to separate those properties with an if statement making it less readable especially when there are many properties to be watched.

The interface of SimpleChanges accepts any string as its key, making it possible for typos. For example, changes.typo_key will not be complained about by the TypeScript compiler.

SimpleChange.previousValue and SimpleChange.currentValue are typed to any instead of the desired property type.

So a common alternative to **ngOnChanges**, which is to use a setter function. It looks like this:

```ts
export class AppComponent {
    private _title: string;

    @Input()
    set title(value: string) {
        this._title = value;
        console.log(`title is changed to ${value}`);
    }

    get title(): string {
        return this._title;
    }
}
```

So the common patter to replace **ngOnChanges** with setter function is following

```ts
 @Input()
  set someInput( val ) {
    this.runSomething();
  }

  ngOnChanges(changes) {
     this.runSomething();
  }
```

Advantages -
This decouples the different properties. The setter function (on-change hook) is located together with @Input() for better readability.

Personally, I only use this method when there are multiple inputs that are all used together in a synchronous computation. If there are multiple inputs that are independently used, then the use of ngOnChanges requires you to explicitly check which properties were changed, since it is invoked for every input property change. This quickly makes the use of the ngOnChanges method unergonomic.

So for single Input changes, Responding to input changes with property accessor functions, is a better way

```ts
class MyComponent {
    public parts: string[] = [];
    @Input() public set name(value: string) {
        this.parts = value.split(" ");
    }
    public get name(): string {
        return this.parts.join(" ");
    }
}
```

Note that this can be made less verbose by omitting the getter function. This is possible because you are often only interested in the derived value that is computed in the setter function rather than the original input value.

The property accessor function approach works best if you have multiple input properties which are not tied together to compute a derived value from these inputs.
