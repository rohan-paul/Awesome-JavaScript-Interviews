// given an array of integers, find the number that is repeated the most.

maxRepeatNum = arr => {

    let elemHash = {};

    for (let i of arr) {
        if (elemHash[i]) {
            elemHash[i] += 1
        } else {
            elemHash[i] = 1
        }
    }
    // return elemHash // => { '1': 2, '2': 1, '3': 2, '5': 3, '8': 1 }  // this is just for debugging

    // Now return the the key that has the max value, I have few option for that

    // Option-1 - Getting key with the highest value from object
    // return Object.keys(elemHash).reduce((a, b) => (elemHash[a] > elemHash[b]) ? a : b )  // => 5


    //Option-2 - Getting key with the highest value from object
    let max = Math.max(...(Object.keys(elemHash).map(i => elemHash[i])))
    // so max is now the highest value that I have in the entire object
    // So, now I have to find the key given this highest value
    return Object.keys(elemHash).filter(i => elemHash[i] === max)[0];  // => 5

}

let myArr = [ 1, 2, 1, 3, 5, 5, 8, 3, 5]

console.log(maxRepeatNum(myArr)); // => 5

