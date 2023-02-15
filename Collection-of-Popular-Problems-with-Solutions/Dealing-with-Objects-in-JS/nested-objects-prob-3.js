// First an example of iterating over an object

const userInfo = {
    firstName: 'Avi',
    lastName: 'Flombaum',
    companyName: 'Flatbook Labs',
    jobTitle: 'Developer Apprentice',
    projects: {
        title: 'Flatbook',
        description: 'The premier Flatiron School-based social network in the world.'
      }

};

// The for/in statement loops through the properties of an object. The block of code inside the loop will be executed once for each property.

function shallowIterator(target) {
    for (const key in target) {
        console.log(target[key]);
    }
}
// console.log(shallowIterator(userInfo));

// However, our shallowIterator() function can't handle nested collections. Take the following example

const numbers = [1, [2, [4, [5, [6]], 3]]];

// console.log(shallowIterator(numbers));

/*  the below will be output
1
[ 2, [ 4, [ 5, [Array] ], 3 ] ]
undefined

 When it tries to iterate over the above nested numbers array, it sees only two elements at the top level of the array: the number 1 and another array, [2, [4, [5, [6]], 3]]. It console.log()s out both of those elements and calls it a day, never realizing that we also want it to print out the elements inside the nested array. Let's modify our function so that if it encounters a nested object or array, it will additionally print out all of the data contained therein:
*/

// modified shallowIterator to go to one level deeper in the given object
modifiedShallowIterator = (target) => {
    for (const key in target) {
        if (typeof(target[key]) === 'object') {
            for (const nestedKey in target[key]) {
                console.log(target[key][nestedKey]);
            }
        }
        console.log(target[key]);
    }
}

// console.log(modifiedShallowIterator(numbers));

//Now the real deepIterator with recursion
deepIterator = (target) => {
    if (typeof(target) === 'object') {
        for (const key in target) {
            deepIterator(target[key]);
        }
    }
    else {
        console.log(target);
    }
}

// deepIterator(numbers);

/* Note on the recursion -

In my first attempt to the recursive solution, I put it like this

deepIteratorR = (target) => {
    for (key in target) {
        if (typeof(target[key]) === 'object') {
            deepIterator(target[key]);
        } else {
            console.log(target[key]);
        }
    }
}
But the above will get me to "Maximum call stack size exceeded" because I am running the recursive deepIterator() function to the if(typeOf()) condition. So, when the first if condition is not satisfied, the else clause will be executed. And this will not stop at all because the nested (recursive) deepIterator() is again checking for the typeOf(target[key]) i.e. the typeOf the same variable.
*/
