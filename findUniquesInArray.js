//Remove duplicates from an array

let arr = ['a','a','c','d','b','c'];

let countOccurrences = function(arr){
    let obj = {};

    arr.forEach(ele => {
        if(obj[ele]){
            obj[ele]++
        } else {
            obj[ele] = 1;
        }
    })

    // console.log(obj);
}

countOccurrences(arr);

let countOccurrencesReduce = function(arr){
    let uniqueObj = arr.reduce((a,b)=>{
        
        if(a[b]){
            a[b]++; 
        } else {
            a[b] = 1;
        }
        return a;
    },{})
    // console.log(uniqueObj);
}

countOccurrencesReduce(arr);

let findUnique = function(arr){
    return arr.reduce((a,b) =>{
        if(a.indexOf(b) < 0)
         {
             a.push(b);
         }
         return a;
    }, []);
}

console.log(findUnique(arr));