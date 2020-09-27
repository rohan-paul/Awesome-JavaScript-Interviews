/*https://www.hackerrank.com/challenges/grading/problem

HackerLand University has the following grading policy:

Every student receives a  in the inclusive range from  to .
Any  less than  is a failing grade.
Sam is a professor at the university and likes to round each student's  according to these rules:

If the difference between the  and the next multiple of  is less than 3, round  up to the next multiple of 5.
If the value of  is less than 38, no rounding occurs as the result will still be a failing grade.
For example, grade = 84 will be rounded to 85 but grade=29 will not be rounded because the rounding would result in a number that is less than .

Given the initial value of  for each of Sam's  students, write code to automate the rounding process. Complete the function solve that takes an integer array of all grades, and return an integer array consisting of the rounded grades. For each , round it according to the rules above and print the result on a new line.

Input Format

First Line

integer 
n: number of students
1 <= n <= 60



Next  lines

integer 
grades-i: individual grades
0 <= grades-i <= 100

Output Format

Print  lines, each with the rounded value of a student’s grade in input order.

Sample Input 0

4
73
67
38
33
Sample Output 0

75
67
40
33
*/

function solve(grades){
    return grades.map(function(thisGrade) {
    	return ( (thisGrade >= 38) && (thisGrade % 5) >= 3 ) ? ((thisGrade + 5) - (thisGrade % 5)) : thisGrade;
    });
}

console.log(solve([73, 67, 38, 33]));