// Slight variation of the BEST AND SIMPLE IN-PLACE SOLUTION IN O(n) time in the other file
// Implementation of the Durstenfeld shuffle, a computer-optimized version of Fisher-Yates of the same Array shuffle problem

shuffleArray = arr => {
    for (let i = arr.length - 1; i >= 0; i--) {
        let randIndex = Math.floor(Math.random() * ( i + 1));
        [ arr[i], arr[randIndex] ] = [ arr[randIndex], arr[i] ]
    }
    return arr;
}

let myArr1 = [1, 2, 3, 4, 5]
console.log(shuffleArray(myArr1))

// The running time of this algorithm is O(n). Note that the shuffle is done in-place. So if you do not want to modify the original array, make a copy of it first with .slice(0).