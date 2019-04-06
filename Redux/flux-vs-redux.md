<img src="flux-diagram-white-background.jpeg">

Flux is a pattern and Redux is a library. Flux is a fancy name for the observer pattern modified a little bit to fit React.

Both Flux and Redux have actions. Actions can be compared to events (or what trigger events). In Flux, an action is a simple JavaScript object, and that’s the default case in Redux too, but when using Redux middleware, actions can also be functions and promises.

With Flux it is a convention to have multiple stores per application; each store is a singleton object. In Redux, the convention is to have a single store per application, usually separated into data domains internally (you can create more than one Redux store if needed for more complex scenarios).

Flux has a single dispatcher and all actions have to pass through that dispatcher. It’s a singleton object. A Flux application cannot have multiple dispatchers. This is needed because a Flux application can have multiple stores and the dependencies between those stores need a single manager, which is the dispatcher.

Redux has no dispatcher entity. Instead, the store has the dispatching process baked in. A Redux store exposes a few simple API functions, one of them is to dispatch actions.

In Flux, the logic of what to do on the data based on the received action is written in the store itself. The store also has the flexibility of what parts of the data to expose publicly. The smartest player in a Flux app is the store.

In Redux, the logic of what to do on the data based on the received actions is in the reducer function that gets called for every action that gets dispatched (through the store API). A store can’t be defined without a reducer function. A Redux reducer is a simple function that receives the previous state and one action, and it returns the new state based on that action. In a Redux app, you can split your reducer into simpler functions as you would do with any other function. The smartest player in Redux is the reducer.