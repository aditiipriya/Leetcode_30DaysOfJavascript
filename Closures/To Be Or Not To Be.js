//Write a function expect that helps developers test their code. 
//It should take in any value val and return an object with the following two functions.

//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

// Examples: 
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}

// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}

// Input: func = () => expect(5).notToBe(null)
// Output: {"value": true}

var expect = function (val) {
    const expectation = {
        toBe: (value) => {
            if (val === value) return true;
            throw new Error("Not Equal");
        },
        notToBe: (value) => {
            if (val !== value) return true;
            else throw new Error("Equal");
        }
    }
    return expectation;
};
expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"

