/* BEST AND SIMPLE IN-PLACE SOLUTION IN O(n) time >> The de-facto unbiased shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.

I can avoid duplicate selection by picking only remaining elements: pick a random number in the range [0, length - 1], where length starts at array.length and decreases by one with each iteration.

In other words, length represents the number of remaining elements to shuffle. Compact the remaining deck as I move elements so that I can easily pick out the next element for shuffling:

THE MAIN THEORY BEHIND THE ELEMENT
the number of shuffled elements (n - m) plus the number of remaining elements (m) is always equal to n. This means we can do the entire shuffle in-place, without any extra space! We use the back of the array to store the shuffled elements, and the front of the array to store the remaining elements. We don’t care about the order of the remaining elements as long as we sample uniformly when picking!

To implement the in-place O(n) shuffle, then, pick a random remaining element (from the front) and place in its new location (in the back). The unshuffled element in the back is swapped to the front, where it waits for subsequent shuffling:

*/


shuffleArr = arr => {

    let len = arr.length;
    let randomIndex;

    while (len) {

        // generate an index which is between 0 and (currentIndex - 1)
        randomIndex = Math.floor(Math.random() * len--);

        [arr[len], arr[randomIndex] ] = [ arr[randomIndex], arr[len] ]
    }
    return arr;
}

let myArr1 = [1, 2, 3, 4, 5]

console.log(shuffleArr(myArr1))

/* The much less optimized version.
Pick a random element from the array (in [0, n - 1]) and then check if you’ve shuffled that element already. This works, but it becomes increasingly slow as the remaining elements dwindle; I will keep randomly picking elements that have already been shuffled.
*/
shuffleArr_Slow = arr => {

    let len = arr.length;
    let shuffledArr = [];
    var rand;

    while (len) {

        // Note in the below line I have to use arr.length, because I need to generate this rand number in a continuously decreasing range. But the len variable is being decreased inside the if loop which I dont have access here. However inside the if loop the array arr is being mutated by shrinking it. So arr.length will be reduces as well.
        rand = Math.floor(Math.random() * arr.length);

        if (rand in arr) {
            shuffledArr.push(arr[rand]);
            delete arr[rand];
            len--;
        }
    }
    return shuffledArr;
}
let myArr2 = [1, 2, 3, 4, 5]
console.log(shuffleArr_Slow(myArr2));

/* Same algo as above with splice() . Still has relatively poor quadratic performance. The problem is that when I remove each element from the original array (array.splice), I have to shift all the subsequent elements down to compact the array. On average, that’s n / 2 elements to shift per element to shuffle, giving O(n2).
*/
shuffleArr_Slow_2 = arr => {

    let len = arr.length;
    let shuffledArr = [];
    let randNum;

    while (len) {

        // Because here, I am not separately decrementing the array within any further if or for loop. So, have to take care of decrementing the random number generation part withing the Math.random() function invocation itself
        randNum = Math.floor(Math.random() * len--);

        // noting splice() mutates the array
        shuffledArr.push(arr.splice(randNum, 1)[0]);
    }
    return shuffledArr;
}

let myArr3 = [1, 2, 3, 4, 5]

console.log(shuffleArr_Slow_2(myArr3))

/* https://stackoverflow.com/questions/21483667

The Math.random() function returns a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive). That is, it returns only one interval, [0,1).

That is, 0 <= Math.random() < 1. The multiplier is what extends this to include the specified number of intervals.

    Here are two example randomly generated numbers:

    Math.random() // 0.011153860716149211
    Math.random() // 0.9729151880834252

    Because of this, when we multiply our randomly generated number by another number, it will range from 0 to a maximum of 1 lower than the number being multiplied by

    Because, The Math.floor() function returns the largest integer less than or equal to a given number.

    Effectively, Math.floor() simply removes the decimal places rather than rounding the number (that is to say, 0.999 becomes 0 when processed with Math.floor(), not 1)).

    Math.floor(0.011153860716149211 * 5) // 0
    Math.floor(0.9729151880834252 * 5)   // 4 */