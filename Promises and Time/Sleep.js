//Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

/*Examples:
Input: millis = 100
Output: 100

Input: millis = 200
Output: 200*/

async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}
 
let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100

 

