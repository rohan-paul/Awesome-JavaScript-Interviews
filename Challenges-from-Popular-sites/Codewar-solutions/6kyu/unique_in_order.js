/* https://www.codewars.com/kata/unique-in-order

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
For example://
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]*/


var uniqueInOrder=function(iterable){
  var array = [],
      len = iterable.length;

    for(var i = 0; i < len; i++) {
      if(iterable[i] !== iterable[i+1]) {
        array.push(iterable[i]);
      };
    }
    return array;
  }

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));
