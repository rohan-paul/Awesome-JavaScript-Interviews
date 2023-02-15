Payload is a non-official, community accepted (de facto) naming convention for the property that holds the actual data in a Redux action object.

The official documentation only states that a Redux action has to be a plain object and needs a string action type:

A plain object describing the change that makes sense for your application. ... Actions must have a type field that indicates the type of action being performed. Types can be defined as constants and imported from another module. It's better to use strings for type than Symbols because strings are serializable. Other than type, the structure of an action object is really up to you. If you're interested, check out Flux Standard Action for recommendations on how actions could be constructed.

**To separate this type from regular data the payload property is used.** Now, on what should go into payload and what should be on the same level with it is debatable, but a popular standard (recommended by the official docs too) is the Flux Standard Action which states that among the official requirements you may add a payload, error, and meta property. Here the payload is defined as:

The optional payload property MAY be any type of value. **It represents the payload of the action.** Any information about the action that is not the type or status of the action should be part of the payload field. By convention, if error is true, the payload SHOULD be an error object.

**The payload can be any valid JS type ( array , object, etc ).**


