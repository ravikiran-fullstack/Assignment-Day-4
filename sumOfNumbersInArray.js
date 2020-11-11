//Sum of all numbers in an array

let numbers = [1,2,5,-2,5,9];

let add = (accumulator, num) => accumulator + num;

let sum = function(numArray){
    return numArray.reduce(add, 4);
}

console.log(sum(numbers));

// IIFE
(function(numArray){
    let adder = (a, b) => a + b;
    console.log(numArray.reduce(adder,11));
})(numbers);