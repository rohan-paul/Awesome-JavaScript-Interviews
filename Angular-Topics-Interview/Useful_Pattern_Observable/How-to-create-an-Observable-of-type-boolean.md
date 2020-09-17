#### How to create an Observable of type boolean?

What I need is `someVariable$` to be false by default.

#### First, when I can not use "BehaviorSubject" for some reason - not so best way

`someVariable$: Observable<boolean>;`

#### The best-practice way

`someVariable$ = new BehaviorSubject<boolean>(false);`
