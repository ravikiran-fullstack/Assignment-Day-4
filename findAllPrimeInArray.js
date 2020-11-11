//Return all the prime numbers in an array
let numbers = [5,8,3,17,88,23,71,54];

let isPrime = function(num){
    if(num === 2 || num === 3){
        return true;
    }

    if(num %2 === 0 || num < 2){
        return false;
    }

    for(let i = 5; i < Math.sqrt(num); i = i + 2){
        if((num % i) === 0){
            return false;
        }
    }

    return true;
}

let result = numbers.filter(num => isPrime(num));
console.log(result);

// IIFE
(function(numArray){
    console.log(numArray.filter(num => isPrime(num)));
})(numbers);