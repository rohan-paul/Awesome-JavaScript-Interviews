// Problems - How could you find all prime factors of a number?

/*
Run a while loop. start dividing by two and if not divisible increase divider.

Algorithm -
1> A Prime Number can be divided evenly only by 1 or itself.
2> we start the divisor to be the smallest prime number, which is 2.
3> With a while loop I shall decrease the given number by a factor till it reaches >2 condition.
4> With the while loop, with each value of n, the divisor is incremented by one.

Example 1: What are the prime factors of 12 ?
so let's check:

12 ÷ 2 = 6  Yes, it divided evenly by 2. So push 2 to the empty array factors[]

In the next loop, n becomes 6, so we divide 6 by 2 again: 6 ÷ 2 = 3 and so push 2 agian to the factors[] array.

In the third iteration, first we divide 3 (as now n has become 3) by 2. Being non-divisible, we increment the divisor by 1 and get 3. And then we divide n (i.e. 3) by 3 and its divisible. So, we push 3 to the array factor[]

12 = 2 × 2 × 3

*/

function primeFactors(n) {
  var factors = [];
  var divisor = 2;

  while (n > 2) {
    if (n % divisor == 0 ) {
      factors.push(divisor);
      n = n / divisor ;
    }
    else {
      divisor++
    }
  }
  return factors;
}


console.log(primeFactors(12));
