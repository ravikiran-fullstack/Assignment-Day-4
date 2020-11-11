//Return median of two sorted arrays of same size

let numArray = [[1,4,7,9,10],[12,16,18,25,29,50]];

let findMedian = function (array){
    if(array.length % 2 !== 0){
      return array[Math.floor(array.length/2)];   
    }
    
    let len = array.length;
    let median = (array[len/2] + array[len/2 - 1]) / 2;
    return median;


}

let medianArray = numArray.map(array => findMedian(array));
console.log(medianArray);

// IIFE
(function(numArray){
    console.log(numArray.map(array => findMedian(array)));
})(numArray);