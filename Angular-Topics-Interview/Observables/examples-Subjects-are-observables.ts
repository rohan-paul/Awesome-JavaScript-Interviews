/**
 * Subjects are observables, that are also observers. They will send updates to all subscriptions, and allow updating from external sources.
 */

import { Subject } from "rxjs"
import { tap } from "rxjs/operators"

let a2 = new Subject()
let b = a2.pipe(tap(() => console.log("Side Effect")))
b.subscribe((result) => console.log(result))
b.subscribe((result) => console.log(result))
console.log(1)
a2.next(2)

/* OUTPUT of above

1
Side Effect
2
Side Effect
2

*/
