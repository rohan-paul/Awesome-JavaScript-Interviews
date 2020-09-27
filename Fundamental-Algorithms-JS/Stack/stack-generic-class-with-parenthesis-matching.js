// Arrow functions cannot be used as methods or constructors - so, I changed my earlier constructor with arrows to regular function in this class

class Stack {
    constructor () {
        this.data = [];
    }

    pop()
    {
        // return top most element in the stack
        // and removes it from the stack
        // Underflow if stack is empty
        if (this.data.length == 0) {
            return "Underflow";
        } else {
        return this.data.pop();
        }
    }

    top () {
        return this.data.length;
    }

    push (...element) {
        for (var i of element) {
            return this.data.push(i)
        }
    }

    // peek() method looks at the object at the top of this stack without removing it from the stack.  The stack is not modified (it does not remove the element; it only returns the element for information purposes).

    peek () {
        return this.data[this.data.length - 1];
    }

    clear () {
        return this.data = [];
    }

    length(){
        return this.data.length;
    }

    search (value) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === value) {
                return value;
            } else {
                return false;
            }
        }
    }
  }

  // Parenthesis matching function to return true or false

  function isParenthesisMatched (str) {

    let stack = new Stack();

    let openingParenthesis = ["[", "(", "{"] ;
    let closingParenthesis = ["]", ")", "}"];

    /* For each element of the string argument, iterate through each element > check if the current element is any of the opening parenthesis array > If true, push it to stack > IF NOT > there could be 3 cases i.e. ], ), }
    > check all the 3 cases switching through them >  and comparing this current closing parenthesis with the top element from the stack. Note, that I have only pushed elements from the opening parenthesis to the stack.
    > If any match is found from in the closingParenthesis array and the top-most element from stack, then just pop that element from stack. And apply break for this iteration.
    > So, for each of the

    Explanation that checking only the top-most element of the stack with the closing parenthesis is enough

        By the design of this code, I am only making sure that to return true from this function, either (A) all the opening parenthesis will come first ( like in this case - "{[( )]}" ) - or (B) corresponding matching parenthesis will come one after another (side by side) ( like in case "{()}[]"  )

        In the first case A - The first time I hit a closing parenthesis, the switch function will switch cases, through the 3 of them, and first will pop-out the "(" parenthesis - as the closing ")" will be matched.
        Then the next iteration will pop-out the straight bracket "[" - as that will be matched. And lastly the left over curly brace "{"

        B> And in the case "{()}[]" - Its eazy to see that the part "{()}" is same as the case-A above, and the part "[ ]" is obvious that the peek element will be the only possible matching element to pop out from the stack.

        And with the above code, third case, that this code will return false, is when although there are matched parenthesis

     */
        for (let i = 0; i < str.length; i++) {
            if (openingParenthesis.includes(str[i])) {
                stack.push(str[i]);
            } else if (closingParenthesis.includes(str[i])) {
                switch (str[i]) {
                    case "]":
                        if (stack.peek() === "[") {
                            stack.pop();
                        } else {
                            return false;
                        }
                        break;

                        case "}":
                        if (stack.peek() === "{") {
                            stack.pop();
                        } else {
                            return false;
                        }
                        break;

                        case ")":
                        if (stack.peek() === "(") {
                            stack.pop();
                        } else {
                            return false;
                        }
                        break;
                }
            }
        }
        return stack.length() === 0;

  }

  console.log(isParenthesisMatched("{[()]}"));

  console.log(isParenthesisMatched("{()}[]"));

  console.log(isParenthesisMatched("{[)]}"));

  console.log(isParenthesisMatched("[)"));