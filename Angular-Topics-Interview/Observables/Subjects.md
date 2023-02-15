Subjects are used for multicasting Observables. This means that Subjects will make sure each subscription gets the exact same value as the Observable execution is shared among the subscribers.

You can do this using the Subject class. But rxjs offers different types of Subjects, namely: BehaviorSubject, ReplaySubject and AsyncSubject.
