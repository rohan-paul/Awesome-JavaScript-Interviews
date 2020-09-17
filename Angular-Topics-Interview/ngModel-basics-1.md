First Whats a model in Angular


The model in an MVC-based application is generally responsible for modeling the data used in the view and handling user interactions such as clicking on buttons, scrolling, or causing other changes in the view.

#### Angular NgModel is an inbuilt directive that creates a FormControl instance from the domain model and binds it to a form control element. The ngmodel directive binds the value of HTML controls (input, select, textarea) to application data. 

The FormControl instance tracks the value, user interaction, and validation status of the control and keeps the view synced with the model. If used within a parent form, the directive also registers itself with the form as a child control.

This directive is used by itself or as part of a larger form. Use the ngModel selector to activate it.

[Official Doc](https://angular.io/api/forms/NgModel)

#### Difference between [(ngModel)] and [ngModel] for binding state to property?

Angular2+ data flow:
--------------------
In Angular the data can flow between the model (component class ts.file) and view (html of the component) in the following manners:

 1. From the model  to the view. 
 2. From the view to the model.
 3. Data flows in both directions, also known as **2 way data binding**. 

Syntax:
-------

**model to view:**

    <input type="text" [ngModel]="overRideRate">

This syntax is also known as **property binding**. Now if the `overRideRate` property of the input field changes the view automatically will get updated. However if the view updates when the user enters a number the `overRideRate`  property will not be updated.

**view to model:**

    (input)="change($event)"            // calling a method called change from the component class
    (input)="overRideRate=$event.target.value" // on input save the new value in the title property

#### What happens here is that an event is triggered (in this case input event, but could be any event). We then can call methods of the component class or directly save the property in a class property.

**2-way data binding:**

The following syntax is used for 2-way data binding. It is basically a syntactic sugar  for both:

 1. Binding model to view.
 2. Binding view to model
    
<input [(ngModel)]="overRideRate" type="text" >

#### Now something changes inside our class this will reflect our view (model to view), and whenever the user changes the input the model will be updated (view to model). 

So in a single statement -

[ngModel] evaluates the code and generates an output (without two-way binding).

[(ngModel)] evaluates the code and generates an output and also enables two-way binding.


A regular example from actual use-cases

```js
<ng-select
      [items]="dropdownOptions"
      bindLabel="displayValue"      
      [(ngModel)]="ngSelectSelectedItem"      
    >
</ng-select>
```

As a background, by default `ng-select` binds to default `label` property for display, and keeps whole `object` as selected value