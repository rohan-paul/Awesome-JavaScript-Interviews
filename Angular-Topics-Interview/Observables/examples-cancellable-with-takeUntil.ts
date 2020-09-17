import { Observable } from "rxjs"
import { interval, timer } from "rxjs"
import { takeUntil } from "rxjs/operators"

/* An observable is Cancellable. Here we will implement it with takeUntil() rxjs operator

The TakeUntil subscribes and begins mirroring the source Observable. It also monitors a second Observable that you provide. If this second Observable emits an item or sends a termination notification, the Observable returned by TakeUntil stops mirroring the source Observable and terminates.
 */

let a = new Observable((observer) => {
  setTimeout(() => observer.next(1), 1000)
  setTimeout(() => observer.next(2), 2000)
  setTimeout(() => observer.next(3), 3000)
  setTimeout(() => observer.complete(), 4000)
})
let b = new Observable((observer) => {
  setTimeout(() => observer.next(), 2500)
  setTimeout(() => observer.complete(), 4000)
})
a.pipe(takeUntil(b)).subscribe((result) => console.log(result))

/* Output

1
2



*/
