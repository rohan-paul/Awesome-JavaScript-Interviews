//Destructuring Example-1
/*  Destructuring allows us to extract data from arrays and objects into separate variables.

Destructuring can also be used for passing objects into a function, allowing you to pull specific properties out of an object in a concise manner. It is also possible to assign default values to destructured arguments, which can be a useful pattern if passing in a configuration object. */

let jane = { firstName: 'Jane', lastName: 'Doe'};
let john = { firstName: 'John', lastName: 'Doe', middleName: 'Smith' }

// the below pattern that I always use in React
let sayName = ({firstName, lastName, middleName = "N/A"}) => {
    console.log(`Hello ${firstName} ${lastName} ${middleName}`);
}

// sayName(jane); // -> Hello Jane N/A Doe
// sayName(john)  // -> Hello John Doe Smith

// Examples of array destructuring for function parameters:
function foo ( [x, y] ) {
    console.log(x, y);
}

// foo([1,2]);  // -> 1 2
// foo([2]);    // -> 2 undefined
// foo([])      // -> undefined undefined


// Examples of Object destructuring for parameters in function declaration:

function foo ( { x, y } ) {
    console.log(x, y);
}

foo({y: 1, x: 2})  // -> 2 1

foo({y: 1})  // -> undefined 1

foo({})  // -> undefined undefined

/* This technique is an approximation of named arguments, in that the properties on the object map to the destructured parameters of the same names. That also means that we get optional parameters (in any position) for free, as you can see leaving off the x "parameter" worked as we'd expect. */


//Destructuring Example-2

let full_name =['John','Deo'];

let [first_name,last_name]=full_name;

console.log(first_name,last_name);
// outputs John Deo