// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]

var createCounter = function (init) {
    let num = init;
    const counterfun = {
        increment: () => { return ++init; },
        decrement: () => { return --init; },
        reset: () => { init = num; return init; }
    }
    return counterfun;
};

const counter = createCounter(5)
counter.increment();
counter.reset();
counter.decrement(); 