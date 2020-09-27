/* https://projecteuler.net/problem=3

Problem 3 - Largest prime factor - The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? Correct Ans - Result: 6857 */

/*
Solution : As we learned a number is called prime factor if it is prime number and it can divide the number exactly. Another property of prime factor is that if we keep dividing the number by prime factor then it will either fully divide the number or produce another prime factor e.g. if we need to find the prime factors of 16 then starting from 2 if keep dividing, eventually dividend become 1, so 2 is the only prime factor of 16. On other hand if need to find prime factor of 15, then we first try to divide it by 2, but since its not divisible by 2, we move to next number which is 3. Since 3 can divide 15, it produces another prime number 5, now 5 is not divisible by anything other than 5, so 3 and 5 become prime factor of 15.

Algorithm : In our program, we have used the same logic. We start with 2, the smallest prime number and try to divide the number, if number is divisible then we keep dividing it by same number until its not divisible any more. Now we move to next number, the largest number which is able to fully divide the input is our largest prime factor.

https://javarevisited.blogspot.com/2015/03/how-to-find-largest-prime-factor-of.html

*/

largestPrimeFactor = n => {

    // start with the smallest prime 2
    let i = 2;

    while (n > i) {
        if (n % i === 0) {
            n = n / i
        }
        i++
    }
return i;
}

console.log(largestPrimeFactor(600851475143));