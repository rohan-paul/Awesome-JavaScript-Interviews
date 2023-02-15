**ControlValueAccessor** interface gives us the power to leverage the Angular forms API, and create a connection between it and the DOM element. The major benefits we gain from doing that, is that we get all the default validations you’d get with any element, in order to track the validity, and it’s value.

#### General Syntax

A. We need to import 1. ‘ControlValueAccessor’ and 2. ‘NG_VALUE_ACCESSOR’ from the forms ngModules, and add ‘forwardRef’ to the list named imports from the core ngModule:

`import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";``

Within the ‘@Component’ annotation, add the following provider configuration, so that our component gets access to the VALUE_ACCESSOR, in addition update the ‘template’ with the code below to bind a value to the ngModel and output a local value

```ts
    template: '<input [(ngModel)]="value"/>local: {{val}}',
    providers: [
        {       provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => CustomInputComponent),
        multi: true
        }
    ]
```

#### Implement Control Value Accessor methods

Now it’s time to implement the ControlValueAccessor interface.
You’re going to need to implement the following methods and variables:

**onChange** → the callback function to register on UI change

**onTouch** → the callback function to register on element touch

**set value(val: any)** → sets the value used by the ngModel of the element

**writeValue(value: any)** → This will will write the value to the view if the the value changes occur on the model programmatically

**registerOnChange(fn: any)** → When the value in the UI is changed, this method will invoke a callback function

**registerOnTouch(fn: any)** → When the element is touched, this method will get called
