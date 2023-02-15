/*https://www.geeksforgeeks.org/ugly-numbers/

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
Note that 1 is typically treated as an ugly number. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is considered to be ugly number.
*/

/* Solution Algo - To check if a number is ugly, divide the number by greatest divisible powers of 2, 3 and 5, if the number becomes 1 then it is an ugly number otherwise not.

Let's take an example : N=9000 (We want to check this number is ugly or not) , but for that we have to check it by dividing N by the Greatest Divisible Power of prime ( 2,3 or 5) : 
N=9000 = 2^3 * 3^2 * 5^3
So, GDP of 2 becomes - 2^3 = 8
GDP of 3 becomes - 3^2 = 9 
GDP of 5 becomes - 5^3=125 


*/

isUgly = (num) => {

	if (num < 0) return false;
	if (num === 1) return true;

	while (num % 2 === 0 ) { num /= 2}
	while (num % 3 === 0 ) { num /= 3}
	while (num % 5 === 0 ) { num /= 5}
	
	return num === 1;
}



console.log(isUgly(9000));