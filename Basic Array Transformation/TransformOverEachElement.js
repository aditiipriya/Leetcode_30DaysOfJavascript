//Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
//The returned array should be created such that returnedArray[i] = fn(arr[i], i).
//Please solve it without the built-in Array.map method.

// Examples:
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]

// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]

// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42] 

var map = function(arr, fn) {
    let newArr=[];
    for(let i=0;i<arr.length;i++){ 
        newArr.push(fn(arr[i],i))
    }
    return newArr
};