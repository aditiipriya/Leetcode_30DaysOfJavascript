/*Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
The function composition of an empty list of functions is the identity function f(x) = x.
You may assume each function in the array accepts one integer as input and returns one integer as output.*/

/*Examples :
Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
Output: 65
Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
Output: 1000
Input: functions = [], x = 42
Output: 42
*/
var compose = function(functions) {
    return function(x) {
        let ans = x;
        for(let i=functions.length-1; i>=0; i--){
            ans = functions[i](ans);
        }
        return ans;
    }
};
//Or
// function compose(functions) {
//     return function(x) {
//         return functions.reduceRight((result, func) => func(result), x);
//     };
// }

const fn = compose([x => x + 1, x => 2 * x])
fn(4) // 9