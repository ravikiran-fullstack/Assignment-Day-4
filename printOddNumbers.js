//Print odd numbers in an array using anonymous function

let numbers = [2,3,4,7,5,11,89,46,32,69.0];

let oddNumbers = numbers.filter(num => num % 2 === 0);
console.log(oddNumbers);