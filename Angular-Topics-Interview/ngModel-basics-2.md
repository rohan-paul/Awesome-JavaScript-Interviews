#### Difference between [(ngModel)] and [ngModel] for binding state to property?


Here is a template example:

```html
<input type="number" class="form-control" [(ngModel)]="overRideRate" formControlName="OverRideRate">

<input type="number" class="form-control" [ngModel]="overRideRate" formControlName="OverRideRate">

```

`[(ngModel)]="overRideRate"` is the short form of 

`[ngModel]="overRideRate"
 (ngModelChange)="overRideRate = $event"`

- `[ngModel]="overRideRate"` is to bind `overRideRate` to the `input.value`
-  `(ngModelChange)="overRideRate = $event"` is to update `overRideRate` with the value of `input.value` when the `change` event was emitted.

Together they are what Angular2 provides for two-way binding.


Another explanation 

`[ngModel]="currentHero.name"` is the syntax for one-way binding, while,

`[(ngModel)]="currentHero.name"` is for two-way binding, and the syntax is compound from:

`[ngModel]="currentHero.name"` and `(ngModelChange)="currentHero.name = $event"`

If you only need to pass model, use the first one. If your model needs to listen change events (e.g. when input field value changes), use the second one.

[https://stackoverflow.com/questions/42504918/difference-between-ngmodel-and-ngmodel-for-binding-state-to-property](https://stackoverflow.com/questions/42504918/difference-between-ngmodel-and-ngmodel-for-binding-state-to-property)