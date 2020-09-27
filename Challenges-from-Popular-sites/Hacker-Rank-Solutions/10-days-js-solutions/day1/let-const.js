function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

  const PI = Math.PI;
  // Print the area of the circle:
  let r = readLine();
  var area = PI * r * r;
  console.log(area);

  // Print the perimeter of the circle:
  var perimeter = 2 * PI * r;
  console.log(perimeter);


  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch(error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}