#### First a quick review of the main lifecycle hooks for components and directives

**constructor** : It is invoked when a component or directive is created by calling new on the class.

**ngOnChanges** : It is invoked whenever there is a change or update in any of the **@Input()** properties of the component.

**ngOnInit** : It is invoked every time a given component is initialized. This hook is only once called in its lifetime after the **first ngOnChanges** .

**ngDoCheck** : It is invoked whenever the change detector of the given component is called. This allows you to implement your own change detection algorithm for the provided component.

**ngOnDestroy** : It is invoked right before the component is destroyed by Angular. You can use this hook in order to unsubscribe observables and detach event handlers for avoiding any kind of memory leaks.

#### Difference between ngOnChanges and ngOnInit

**ngOnInit()** is used to execute any piece of code for **ONLY ONE TIME** (for eg : data fetch on load).

**ngOnChanges()** will execute on every **@Input()** property change.

If you want to execute any component method, based on the @Input() value change, then you should write such logic inside ngOnChanges().

**So why do we need ngOnInit() when we have ngOnChanges() ?**

It is because you cannot execute one time code, on every @Input() property change. And you cannot use constructor as the replacement of ngOnInit() as well. Because the bindings, such as **@Input** properties are not available within the constructor.

**ngOnChanges** will be called first on the life cycle hook when there is a change to the component inputs through the parent.

**ngOnInit** will be called only once on initializing the component after the first ngOnChanges called.

#### Why is ngOnInit not the first lifecycle hook?

**ngOnInit()** is called after **ngOnChanges**() was called the first time.

This ensures that initial values bound to inputs are available when ngOnInit() is called. ngOnChanges() is called after inputs were updated.
