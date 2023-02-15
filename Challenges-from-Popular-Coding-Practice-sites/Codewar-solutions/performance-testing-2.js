function wallisPi(num) {
    var productPi = 1;
    for (var i = 1; i <= num; i++) {
        productPi *= ((2 * i) / (2 * i - 1)) * ((2 * i) / (2 * i + 1));
    }
    return 2 * productPi;   
}

// console.log(wallisPi(50000)); // returns 3.141435593589838

function wallisPiRecurse(num, iterationNum) {
    if (num === 0) {
        return 2; // The terminal or tail case of the recursion, when the result from the whole multiplication formulae need to be multiplied by 2; i.e. when num hits zero
    }

    if (!iterationNum) {
        iterationNum = 1;
    }

    return (Math.pow(iterationNum, 2)) / (Math.pow(iterationNum, 2) - 0.25) * wallisPiRecurse(--num, ++iterationNum)
    
}

// console.log(wallisPiRecurse(5000)); // returns 3.1414355935899008

var start = Date.now();
wallisPi(100);
console.log("Time:" + (Date.now()-start));


var start = Date.now();
wallisPiRecurse(1000);
console.log("Time:" + (Date.now()-start));