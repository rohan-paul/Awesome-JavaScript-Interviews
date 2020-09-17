const events = [
  {
    name: "First Event",
    metadata: {
      type: "public"
    }
  },
  {
    name: "Event 2",
    metadata: {
      type: "private"
    }
  },
  {
    name: "Third Event",
    metadata: {
      type: "closed"
    }
  }
];

/* FROM BLOG POST - https://medium.freecodecamp.org/handling-state-in-react-four-immutable-approaches-to-consider-d1f5c00249d5

Note, here I am NOT mutating the original array.
The basic idea is to create a new empty object for each item in the array and assign the properties from old objects to them, respectively. This means we get an object with a new reference, so we are not going to modify the Original One.
  */
const mappedEvents = events.map(e => {
  if (e.name) {
    e = { ...e, name: "Second Event Mutated" };
  }
  return e;
});

console.log(mappedEvents);

/* OUTPUT -
[ { name: 'Second Event Mutated', metadata: { type: 'public' } },
  { name: 'Second Event Mutated', metadata: { type: 'private' } },
  { name: 'Second Event Mutated', metadata: { type: 'closed' } } ]
*/
