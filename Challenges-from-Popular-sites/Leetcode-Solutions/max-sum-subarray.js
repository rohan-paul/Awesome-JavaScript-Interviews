/* It is an adaptation of Kadane's algorithm;
It has O(n) linear complexity;
Using 'temp' and 'result' objects results in high readability and more concise code. */

const maxSequence = arr => {

    const allPositives = arr => arr.every(n => n > 0);
    const allNegatives = arr => arr.every(n => n < 0);

    if(arr.length === 0 || allNegatives(arr)) return 0;

    const temp = { start: 0, sum: 0 };
    let result = { start: 0, end: 0, sum: 0 };

    for (let i = 0; i < arr.length; i++) {
        temp.sum += arr[i];

        if (temp.sum > result.sum) {
        result = { start: temp.start, end: i, sum: temp.sum };
        }

        if (temp.sum < 0) {
        temp.sum = 0;
        temp.start = i + 1;
        }
    }

    return result;
};

console.log(maxSequence([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // 0
console.log(maxSequence([])); // 0
console.log(maxSequence([2, 1, 3, 4, 1, 2, 1, 5, 4])); // { start: 0, end: 8, sum: 23 }
