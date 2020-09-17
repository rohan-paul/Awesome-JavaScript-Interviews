switchMap() operators

`switchMap()` does exactly what it says, it switches from the primary observable to a secondary (or 'inner') observable.
`switchMap` is often recommended with the subscription because of its advantages compared to other flattening operators. It will switch to a new observable and cancel the previous observable.

`switchMap` is usually used when you have some async operation that is triggered by some prepended "event/stream". The difference to e.g. `flatMap` or `concatMap` is, that as soon as the next trigger emits, the current async operation is canceled and re-triggered.

#### One of the most common usecase of switchMap() is to pull a url parma (the employee ID in the below code example ), and retrieve the employee to display.

```js
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { EmployeeService }  from '../employee.service';
import { Employee} from '../employee;

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employee$: Observable<Hero>;

  constructor(
        	private route: ActivatedRoute,
        	private router: Router,
        	private service: EmployeeService
  ) {}

  ngOnInit() {
        	this.employee$ = this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
        	    this.service.getEmployee(params.get('id')))
        	);
  }
  }
}
```

So in above, as the route-params change, my service.getEmployee() is automatically called again with the changed params and the previous call is canceled so you won't receive outdated data.

So in above, if I subscribe to the paramMap and I start spamming changes to the route parameters, switchMap will cancel any pending requests and pick up the new request. If you make an HTTP request within the subscription then use switchMap to cancel any unnecessary pending request.

To compare switchMap with its other rx-js counterparts.

flatMap/mergeMap - creates an Observable immediately for any source item, all previous Observables are kept alive
concatMap - waits for the previous Observable to complete before creating the next one
switchMap - for any source item, completes the previous Observable and immediately creates the next one
exhaustMap - source items are ignored while the previous Observable is not completed

#### Further Reading

[https://stackoverflow.com/questions/49698640/flatmap-mergemap-switchmap-and-concatmap-in-rxjs](https://stackoverflow.com/questions/49698640/flatmap-mergemap-switchmap-and-concatmap-in-rxjs)

[https://stackoverflow.com/questions/42655134/angular-2-why-use-switchmap-when-retrieving-route-params](https://stackoverflow.com/questions/42655134/angular-2-why-use-switchmap-when-retrieving-route-params)
