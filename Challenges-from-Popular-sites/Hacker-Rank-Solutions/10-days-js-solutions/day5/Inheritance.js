// https://www.hackerrank.com/challenges/js10-inheritance/problem

//  *  Write code that adds an 'area' method to the Rectangle class' prototype
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

Rectangle.prototype.area = function() {
  return this.w * this.h;
}

//  * Create a Square class that inherits from Rectangle and implement its class constructor

class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.h = s;
    this.w = s;
  }
}