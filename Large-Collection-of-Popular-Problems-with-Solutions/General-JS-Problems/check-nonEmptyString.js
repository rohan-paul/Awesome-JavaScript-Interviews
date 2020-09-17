// Problem - You want to verify (assume its called 'unknownVariable') that a variable is defined, is a string, and is not empty.

if(((typeof unknownVariable !== 'undefined' && unknownVariable) &&
unknownVariable.length() > 0) &&
typeof unknownVariable.valueOf() == 'string')
