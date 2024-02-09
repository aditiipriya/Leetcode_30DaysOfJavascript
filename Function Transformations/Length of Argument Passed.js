// Write a function argumentsLength that returns the count of arguments passed to it.
 
/*Examples:
Input: args = [5]
Output: 1
Input: args = [{}, null, "3"]
Output: 3 */

var argumentsLength = function(...args) {
    return args.length
};
argumentsLength(1, 2, 3); // 3
