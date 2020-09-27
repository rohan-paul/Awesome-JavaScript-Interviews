/* https://www.hackerrank.com/challenges/sock-merchant/problem

The first line contains an integer n, the number of socks.
The second line contains  space-separated integers describing the colors ci of the socks in the pile.

Sample Input

9
10 20 20 10 10 30 50 10 20

Sample Output

3

To solve this challenge, we go through each color  and count its frequency, . Once we've calculated all the frequencies, we calculate the number of pairs of each kind of sock as  (using integer division). Finally, we print the total sum of all pairs of socks.
*/

sockMerchants = (n, ar) => {

  // I have to sort it so, each of same color-number comes side by side. Only then the below 2 if-loops inside the while will work. As
  ar.sort()

  let stockHolder = []
  // This is a 2-d array, and the inner array is the actual numbered-color
  // The final structure of stockHolder = [ [ 10, 10, 10, 10 ], [ 20, 20, 20 ], [ 30 ], [ 50 ] ]

  let i = 0 // index of the given array in the function argument.

  let x = 0;  // the index value of 'stockHolder'. So each of the 'x' is an array itself. That is the array containing all socks of same color.

  let finalSocksPair = 0;  // The very final number of socks pair that can be sold.

  while (i < n) {

    // if a particular color-number stock array is still undefined then create the array of that color. Meaning for the first value of x, I always have to create a new array.
    if (stockHolder[x] === undefined) {
      stockHolder[x] = [];
      stockHolder[x].push(ar[i]);
    }
    i++;

    // If a particular color-number is available in this element of stockHolder already, then push it . Else, it means I have hit a new color, that is, I have to increment x, meaning I have to move to the next inner array for a new color-number.

    if (ar[i] === stockHolder[x][0]) {

      stockHolder[x].push(ar[i]);
    } else {
      x++
    }
  }
  // console.log(stockHolder);

  for (let i = 0; i < stockHolder.length; i++) {
    finalSocksPair += Math.floor(stockHolder[i].length / 2)
  }
  return finalSocksPair
}

console.log(sockMerchants(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));