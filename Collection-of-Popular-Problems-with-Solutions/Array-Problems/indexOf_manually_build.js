/* Problem Statement -
Build the function indexOf, for the case when the browser does not support the function natively.
 */

if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function indexOf(searchElement, startFromIndex) {
        if(startFromIndex == null) {
            startFromIndex = 0;
        } else if (startFromIndex < 0) {
            startFromIndex = Math.max(0, (this.length + startFromIndex));
        }
        for (var i = startFromIndex; i < this.length; i++ ) {
            if (this[i] === searchElement)
                return i;
        }
            return -1;
    };
}

/*My Own learning note - Note that when variable startFromIndex < 0, we are updating its value by adding it with length of the array - based on the official definition of this argument when its negative - "it is taken as the offset from the end of the array". And "the array is still searched from front to back" So if startFromIndex is passed a value of -1 and the array has a length of 3, the indexOf function will start its searching from index position of 1 towards right.
  */