/*Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
The fn function takes one or two arguments:
1) arr[i] - number from the arr 2) i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value.
A truthy value is a value where Boolean(value) returns true.
Please solve it without the built-in Array.filter method.*/

/*Examples:
Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
const newArray = filter(arr, fn); // [20, 30]
Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]*/

var filter = function(arr, fn) {
    let filteredArr =[];
    for(let i=0;i<arr.length;i++){
        let temp=fn(arr[i],i)
        if(temp) filteredArr.push(arr[i])
    }
    return filteredArr
};

