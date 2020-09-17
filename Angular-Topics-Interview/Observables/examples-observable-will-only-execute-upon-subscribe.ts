/**
   Observables will only execute upon subscribe, and will re-execute every time they are subscribed.
 */

import { Observable } from "rxjs"

let a = new Observable((observer) => {
  console.log(1)
  observer.next(2)
})
a.subscribe((result) => console.log(result))
a.subscribe((result) => console.log(result))

/* OUTPUT of above
1
2 first result
1
*/
