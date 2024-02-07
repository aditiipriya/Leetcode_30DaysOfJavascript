//Write a function createHelloWorld. It should return a new function that always returns "Hello World".

//Example:
// Input: args = []
// Output: "Hello World"

// Input: args = [{},null,42]
// Output: "Hello World"

let Input = [{},null,42]

function createHelloWorld() {
    return function(...Input){
        return "Hello World"
    }
};

let Output=createHelloWorld()(); 
console.log("Output: ", Output)
