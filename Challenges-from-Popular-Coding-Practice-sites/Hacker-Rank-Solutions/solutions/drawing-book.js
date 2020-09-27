/* https://www.hackerrank.com/challenges/drawing-book/problem?h_r=next-challenge&h_v=zen

Brie can either start turning pages from the front of the book or from the back of the book. She always turns pages one at a time. When she opens the book, page  is always on the right side:
When she flips page 1 , she sees pages 2 and 3. Each page except the last page will always be printed on both sides.

If the book is n pages long, and she wants to turn to page p, what is the minimum number of pages she will turn? She can start at the beginning or the end of the book.

Input Format

The first line contains an integer n, the number of pages in the book.
The second line contains an integer p, the page that Brie's teacher wants her to turn to.

Sample Input 0

6
2

Sample Output 0

1

*/
pageCount = (n, p) => {

  if (p <= 1 || p === n || ((n % 2) && p >= (n - 1) ) ) return 0;

  let beginningStart = Math.floor(p / 2);

  let endingStart = Math.floor(n / 2) - beginningStart;

  return Math.min(beginningStart, endingStart);
}

console.log(pageCount(6, 2));

console.log(pageCount(5, 4));

/* Explanation of the first line < ((n % 2) && p >= (n - 1) ) > - I included this, to shorten number of calculation.

If total no of pages are odd, then the last 2 pages will be printed on both sides. And so, if she is searching for n-th pages or (n - 1)-th pages, she does not need to flip at all.

*/