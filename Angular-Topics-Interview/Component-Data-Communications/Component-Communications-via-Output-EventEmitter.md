Another commonly used way to share data is by emitting data from Child to Parent. With this approach, it is easy to pass data by events such as button clicks.
In the parent component, we have to create a method to receive the messages and in the child component, we declare a messageEvent variable with the @Output() decorator and set it equal to a new event emitter. After that, we can create a method to emit data and trigger it on a button click.

#### parent.component.ts

```js
import { Component } from "@angular/core";

@Component({
  selector: "app-parent",
  template: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent {
  constructor() {}

  message: string;

  receiveMessage($event) {
    this.message = $event;
  }
}
```

#### parent.component.html

```html
<app-child (messageEvent)="receiveMessage($event)"></app-child>
<h1>
  Message from Child : {{message}}
  <h1></h1>
</h1>
```

#### child.component.ts

```js
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  message: string = "Hello Angular!"

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  sendMessage() {
    this.messageEvent.emit(this.message)
  }
}

```

#### child.component.html

```html
<button (click)="sendMessage()">Send Message</button>
```

### What is the difference betwen @Input and @Output

**@Input()** is to pass data In to the component

```js
class ChildComponent {
  @Input() data;
}

@Component({
  template: `<child [data]="parentData"></child>
})
class ParentComponent {
  parentData;
}
```

In above `ParentComponent` (not shown above) is passing data to the child by the @Input() property. The [data] is the same name as the property in the child component.

**@Output** is to emit data (events) Out from a component

```js
class ChildComponent {
  @Output() dataChange = new EventEmitter();

  click() {
    dataChange.emit('new Value');
  }
}

@Component({
  template: `<child (dataChange)="onDataChange($event)"></child>
})
class ParentComponent {

  onDataChange(event) {
    console.log(event);
  }
}

```

Here ChildComponent has an @Output that it emits events to. The parent is listening and passes a callback to the (dataChange). Now every time the child emits an event, the parent callback will be called passing the event.
