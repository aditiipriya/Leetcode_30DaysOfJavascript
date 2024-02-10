/*Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
The returned promise should resolve with the sum of the two numbers.*/

/*Examples:
Input: promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
Output: 7
Input: promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
Output: -2*/

var addTwoPromises = async function(promise1, promise2) {
    const result = await Promise.all([promise1,promise2])
    return result.reduce((acc,cur)=>acc+cur,0)
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2))
.then(console.log); // 4
