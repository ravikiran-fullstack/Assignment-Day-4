//Return all the palindromes in an array
let strArray = [,'madam','dad','print','kayak','level','testrr','Malayalam'];

let isPalindrome = function(str){
    str = str.toLowerCase();
    let j = str.length - 1;
    for(let i = 0; i < Math.floor(str.length / 2); i++ ){
           if(str[i] !== str[j]){
               return false;
           }
           j--;
    }
    return true;
}

let result = strArray.filter(str => isPalindrome(str));
console.log(result);

//IIFE
(function(strArray){
 
let isPalindrome = function(str){
    str = str.toLowerCase();
    let j = str.length - 1;
    for(let i = 0; i < Math.floor(str.length / 2); i++ ){
           if(str[i] !== str[j]){
               return false;
           }
           j--;
    }
    return true;
}

    console.log(strArray.filter(str => isPalindrome(str)));
        
})(strArray);