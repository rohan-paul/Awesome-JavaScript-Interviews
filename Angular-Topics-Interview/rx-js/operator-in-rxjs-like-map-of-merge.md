#### First See Types of operators

According to the official RxJS documentation, there are two types of operators.

A. Pipeable operators: These are operators that can be piped to existing Observables using the pipe syntax.

`observableInstance.pipe(operator())`

They are called on existing Observables and they do not change the Observable instance, they return a new Observable with a subscribe method based on the initial Observable.

B. Creation operators: These operators, on the other hand, create an Observable with either a pre-defined behavior or by joining more than one Observable together. They can be referred to as standalone methods that create new Observables.

## of()

This is creation operator used to create Observables from any kind of data, be it a string or an array, an object or even a promise. Test it out with this code block below:

```js
import { Component, OnInit } from "@angular/core"
import { Observable, of } from "rxjs"
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const observable1 = of(1, 2, 3).subscribe((data) => console.log(data))
  }
}
```

## map()

This is an operator defined in a pipe inside, with which you can modify the content of emitted values from one observable to form another new observable. In your app.component.ts file copy in the code block below:

```js
import { Component, OnInit } from "@angular/core"
import { Observable, of } from "rxjs"
import { map } from "rxjs/operators"
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const observable1 = of("my name is lotanna")
    observable1
      .pipe(map((data) => data.toUpperCase()))
      .subscribe((data) => console.log(data))
  }
}
```

Inside the pipe, you can then add your modification logic, in above case it is to convert the emitted values to upper case.

#### Further Reading

[use-rxjs-operators-to-consume-observables/](https://blog.logrocket.com/use-rxjs-operators-to-consume-observables/)
