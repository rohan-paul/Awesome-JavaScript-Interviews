Observables compared to promises
Observables are often compared to promises. Here are some key differences:

Observables are declarative; computation does not start until subscription. Promises execute immediately on creation. This makes observables useful for defining recipes that can be run whenever you need the result.

Observables provide many values. Promises provide one. This makes observables useful for getting multiple values over time.

Observables differentiate between chaining and subscription. Promises only have .then() clauses. This makes observables useful for creating complex transformation recipes to be used by other part of the system, without causing the work to be executed.

Observables subscribe() is responsible for handling errors. Promises push errors to the child promises. This makes observables useful for centralized and predictable error handling.
