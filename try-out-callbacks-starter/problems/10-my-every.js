/*******************************************************************************
Write a function `myEvery` that accepts an array and a callback as arguments.
The function should return a boolean indicating whether or not all elements of
the array return true when passed into the callback.

Do not use the built in Array#every.

Examples:

let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false
*******************************************************************************/

<<<<<<< HEAD
let myEvery = function () {};
=======
let myEvery = function(array, cb) {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        let ele = array[i];
        if(cb(ele)) {
            count++
        }

    }
    if(count === array.length) {
        return true;
    } else {
        return false;
    }
};


let isEven = function (num) {
    return num % 2 === 0;
};

let hasO = function(string) {
    return string.includes('o');
};

console.log(myEvery([4, 8, 6, 10], isEven));            // true
console.log(myEvery([4, 7, 6, 10], isEven));            // false
console.log(myEvery(['book', 'door'], hasO));           // true
console.log(myEvery(['book', 'door', 'pen'], hasO));    // false


>>>>>>> e772a5a5370360ff531e051861061f7aa6dbf1bc

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myEvery;
