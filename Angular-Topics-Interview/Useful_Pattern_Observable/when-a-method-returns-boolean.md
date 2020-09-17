#### First the wrong code that will NOT compile at all

```ts
    method(): Observable<boolean> {
    if (sessionId === '')
      return false;
    return this._http.get('sessionId=' + sessionId).map(res=> {
      if (res.status === "success") {
        return true;
      }
      return false;
    });
  }
```

This will give an error:

`Type 'boolean' is not assignable to type 'Observable'.`

The reason is becuase

```ts
    method(): Observable<boolean> {
    if (sessionId === '')
      return false; // <<< obviously not an observable
```

#### The correct way to define the method

```ts
    method(): Observable<boolean> {
    if (sessionId === '')
      return Observable.of(false);
    }
    return this._http.get('sessionId=' + sessionId).map(res=> {
      if (res.status === "success") {
        return true;
      }
      return false;
    });
  }
```

#### RxJs v6 case where of does not exist on Observable but could be imported directly from rxjs:

```ts
import { Observable, of as observableOf } from 'rxjs'; // since RxJs 6

method(): Observable<boolean> {
  if (sessionId === '') {
    return observableOf(false);
  }
  return this._http.get('sessionId=' + sessionId).map(res=> {
      if (res.status === "success") {
        return true;
      }
      return false;
    });
}
```

#### Further Reading

[https://stackoverflow.com/questions/42178383/type-boolean-is-not-assignable-to-type-observableboolean](https://stackoverflow.com/questions/42178383/type-boolean-is-not-assignable-to-type-observableboolean)
