[Official Doc](https://angular.io/api/core/AfterViewInit)

**AfterViewInit**

A lifecycle hook that is called after Angular has fully initialized a component's view. Define an ngAfterViewInit() method to handle any additional initialization tasks.

```js
interface AfterViewInit {
  ngAfterViewInit(): void;
}
```

**ngAfterViewInit()**

A callback method that is invoked immediately after Angular has completed initialization of a component's view. It is invoked only once when the view is instantiated.

**AfterViewInit** starts to make more sense if you've began some dynamic component loading or manual view creation in Angular.

**OnInit** is called once when the component's **@Inputs** and **@Outputs **have been resolved.

**AfterViewInit** is called when the component's view has been attached. Remember that Angular compiles all to JS files, not html - the framework manages templates in code and has a rendering engine to interact with the DOM. Here, @ViewChild and @ViewChildren will be resolved.
