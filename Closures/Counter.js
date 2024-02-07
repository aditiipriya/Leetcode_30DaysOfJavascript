//Given an integer n, return a counter function. 
//This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

//Input: n = 10 
//Output: [10,11,12]

// Input: n = -2
// Output: [-2,-1,0,1,2]
 
var createCounter = function(n) {
    return function() {
        return n++
    };
};

const counter = createCounter(10)
counter() 
counter() 
counter() 
