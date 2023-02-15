/* Question: Count Total number of zeros from 1 upto n ?

Answer: If n = 100. number of 0 would be 11 (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100). Please note that 100 has two 0. This one looks simple but little tricky

*/

/* My Note - If I have a number 1 to 50 the value is 5. which is 50 divided by 10. However, if the value is 100. the value is 11. you will get by 100/10 = 10 and 10/10. Thats how you will get in the more zeros in one number like (100, 200, 1000)

The idea is to traverse all numbers from 1 to n. For every traversed number, traverse through its digits, if any digit is 0, increment count. Below is the implementation of the above idea :

https://www.geeksforgeeks.org/count-numbers-0-digit/

Refer below post for optimized solution. - https://www.geeksforgeeks.org/count-numbers-having-0-as-a-digit/

*/

const countZero = num => {
  let counter = 0

  while (num) {
    // Count the first no of count of zeros
    counter += Math.floor(num / 10)

    // console.log(Math.floor(102 / 10)); => 10

    // then reduce the original number for the next loop
    num = Math.floor(num / 10)
    /* If I don't user Math.floor() then division by 10 will create decimal numbers and the number of iterations will way higher
    Note console.log(Math.floor(0.1)) => 0
    console.log(Math.floor(102 / 10)); => 10
     */
  }

  return counter
}

console.log(countZero(107))
