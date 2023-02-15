// https://www.hackerrank.com/challenges/js10-template-literals/problem

/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
/* Note by me
A> https://medium.freecodecamp.org/es6-tagged-template-literals-48a70ef3ed4d
ES6 also introduced a more advanced and powerful concept of Tagged Template Literals. A tag is a function which has ability to interpret & process the template. This means we can run the template string through a function and have more control over how the template is converted to string representation.

Tags are just normal functions, but to be useful they have to be invoked differently.
The template literal is passed to tag function as multiple parameters. The first argument is a string array containing string literals from the template: First element in the array is string starting from index 0 to the first interpolated value, second element in the array is string after first interpolated value up-to next interpolation and so on until end of template is reached.

All the interpolated expressions are evaluated and passed to the tag as second argument on-wards in order of their occurrence. The tag can process the literals and evaluated expressions to form the return value.

When the interpolation contains a function expression, it is evaluated as normal string in case of normal template literals. While the same expression is evaluated as function in case of tagged template literals and the tag can call that function.

 */
function sides(literals, ...expressions) {
    var area = expressions[0];
    var perimeter = expressions[1];

    var s1 = (perimeter + Math.sqrt(perimeter * perimeter - (16 * area))) / 4;
    var s2 = (perimeter - Math.sqrt(perimeter * perimeter - (16 * area))) / 4;

    var array = [s1, s2];
    return array.sort(function(a, b) {
        return a - b;
    });
}