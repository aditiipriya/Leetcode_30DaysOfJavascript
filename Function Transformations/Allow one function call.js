/*Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.
The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.*/
 
/*Examples:
Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
Output: [{"calls":1,"value":6}]

Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
Output: [{"calls":1,"value":140}]*/

var once = function(fn) {
    let called = 0;
	return function(...args){
        if(called)
            return undefined;
        called = 1;
        return fn(...args);
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
onceFn(1,2,3); 
onceFn(2,3,6); 



