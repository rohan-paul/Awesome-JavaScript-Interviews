/* Return everything
Everything should return, also functions that emit side-effects. Try to preserve homomorphism. Try to keep the return type of a function consistent. Don't mix computations that transform data with things like writing to screen. Modular code is easier to maintain. Use parameters for replaceable data instead of hard-coding. */

// Implementation of the above with examples by first using non-best-practice way to return factorial of no-5

let fact = 1;

for (let i = 1; i <= 5; i++ ) {
    fact *= i;
}

console.log('Fact of 5: ', fact);

//Now the best practice

const factorial = n =>
   n === 0 ? 1 : n * factorial(n - 1);

console.log('Factorial of 5 is : ', factorial(5));

