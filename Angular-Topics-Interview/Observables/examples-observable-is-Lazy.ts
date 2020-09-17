/* An observable is Lazy, Observables will only execute upon subscribe.
And if you don't subscribe it will not start. As long as the observer didn't subscribe it, it doesn't emit any value. So I used the subscribe() function to subscribe to this Observable
 */

import { Observable } from "rxjs"

let a = new Observable((observer) => {
  setTimeout(() => observer.next(1), 1000)
  setTimeout(() => observer.next(2), 2000)
  setTimeout(() => observer.complete(), 3000)
})
setTimeout(() => {
  console.log(3)
  a.subscribe((result) => console.log(result))
}, 3000)

/* Output

3  # Here the observable hasn’t started yet
1
2

*/
