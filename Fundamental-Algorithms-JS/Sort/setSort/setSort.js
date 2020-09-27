setSort_1000 = arr => {

    let newArr = new Array(1000).fill(0)

    let sortedArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr[arr[i]] = 1  // this 1 can be any other arbitrary number. Becuase its just a hook with which I will get the key in the next step
    }

    for (let i = 0; i < newArr.length; i++) {
        if (1 === newArr[i]) {
            sortedArr.push(i)
        }
    }
    return sortedArr;
}

let myArr =  [34, 203, 3, 746, 200, 984, 198, 764];

console.log(setSort_1000(myArr)); // => [ 3, 34, 198, 200, 203, 746, 764, 984 ]