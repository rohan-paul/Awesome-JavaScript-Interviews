I want to retry an api call 10 times (waiting one second since it fails until next execution) and if this 10 times it fails, then I will execute a function, this is my aproach:

```js
import { Observable, throwError, EMPTY } from "rxjs"
import { concatMap, delay, retryWhen, take } from "rxjs/operators"

handleErrorWithRetry(error, req: HttpRequest<any>, next: HttpHandler): Observable<any> {
      if (error.status === 0) {
        return next.handle(req).pipe(
          retryWhen((errors) => {
            return errors.pipe(
              delay(1000),
              take(10), // Number of retries
              concatMap(throwError), // Let the error bubble up again
            )
          ),
          catchError((err) => this.checkConnection(err))),
        );
      }
    }

    checkConnection(error): Observable<any> {
       console.log(error)
       return EMPTY;
    }
```
