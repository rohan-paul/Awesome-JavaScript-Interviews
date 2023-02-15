/*
A postfix expression evaluator works on arithmetic expressions taking the following form:
op1 op2 operator
Using two stacks — one for the operands and one for the operators — design and implement a JavaScript function that converts infix expressions to postfix expressions, and then use the stacks to evaluate the expression.

Infix expression: The expression of the form a op b. When an operator is in-between every pair of operands.
Postfix expression: The expression of the form a b op. When an operator is followed for every pair of operands.

======================

Problem - Statement -

Construct a function named toPostfix that, when given a string containing an expression in infix notation, will return an identical expression in postfix notation.

The operators used will be '+', '-', '*', '/', and '^' with standard precedence rules and left-associativity (meaning the operations are grouped from the left) of all operators but "^".

toPostfix("2+7*5"); // Should return "275*+"
toPostfix("3*3/(7+1)"); // Should return "33*71+/"
toPostfix("5+(6-2)*9+3^(7-1)"); // Should return "562-9*+371-^+"

======================

THe Algo https://www.geeksforgeeks.org/stack-set-2-infix-to-postfix/

1. Scan the infix expression from left to right.

2. If the scanned character is an operand, push it to the result array.

3. Else if the scanned character is a operator

    3.1 If the precedence of the scanned operator is greater than the precedence of the top-most operator in the stack(or the stack is empty), push it. NOTE - A OPERATOR WITH HIGHER ORDER IS EXECUTED FIRST PER PEMDAS / BODMAS RULE

    3.2 Else, Pop the operator from the stack until the precedence of the scanned operator is less-equal to the precedence of the operator residing on the top of the stack. Push the scanned operator to the stack.

4. If the scanned character is an ‘(‘, push it to the stack.

5. If the scanned character is an ‘)’, pop and output from the stack until an ‘(‘ is encountered.

6. Repeat steps 2-6 until infix expression is scanned.

7. Pop and output from the stack until it is not empty.
*/

function toPostfix (infix) {

    let operatorsObj = {
        '^': {
          precedence: 4,
          left: false
        },
        '*': {
          precedence: 3,
          left: true
        },
        '/': {
          precedence: 3,
          left: true
        },
        '+': {
          precedence: 2,
          left: true
        },
        '-': {
          precedence: 2,
          left: true
        },
      };

    let postfix = "";  // This is the final string after denoting the expression in postfix format
    let operations = [] // This array containing all the 5 individual operations

    // start scanning through each of the element of the given expression i.e. the argument 'infix' which in the callback funciton to forEach will be represented by the variable element.

    infix.split("").forEach(function(element) {

        // first if the current element is a number and not a operator or not a "(" or ")"
        if (!isNaN(parseInt(element))) {
            postfix += element;
        }
        // Now if current element is an operator, i.e. one of the 5 properties of operatorsObj is 'true'
        else if (operatorsObj[element]) {

            let thisOperator = operatorsObj[element];
            let topmostOperationStackElement = operations[operations.length - 1];

            while (operatorsObj[topmostOperationStackElement] && ((thisOperator.left && thisOperator.precedence <= operatorsObj[topmostOperationStackElement].precedence ))) {
                postfix += operations.pop(); // That is, pop this operation and only then push this operation to the final resultant postfix
                topmostOperationStackElement = operations[operations.length - 1 ];  // after popping, update the top most operation stack element.
            }
            operations.push(element);
        }
        else if (element === "(") {
            operations.push(element);
        }
        else if (element === ")") {
            let topmostOperationStackElement = operations[operations.length - 1];
            while (topmostOperationStackElement && topmostOperationStackElement !== "(") {
                postfix += operations.pop(); // Per the original algo - If the scanned character is an ‘)’, pop and output from the stack until an ‘(‘ is encountered.
                topmostOperationStackElement = operations[operations.length - 1];
            }
            operations.pop();
        }
    }); // Here ends my forEach operations on the individual elements of the given array

    let topmostOperationStackElement = operations[operations.length - 1];
    while (topmostOperationStackElement && topmostOperationStackElement !== "(") {
        postfix += operations.pop();
        topmostOperationStackElement = operations[operations.length - 1];
    }

    return postfix;
}

console.log(toPostfix("2+7*5"));
console.log(toPostfix("3*3/(7+1)"));
console.log(toPostfix("5+(6-2)*9+3^(7-1)"));