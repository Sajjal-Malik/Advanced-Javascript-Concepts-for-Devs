function doA(callback) {
    console.log('A');
    setTimeout(function() {
        callback();
    }, 2000);
}

function doB() {
    console.log('B');
}

function doC(callback) {
    console.log('C');
    setTimeout(function() {
        callback();
    }, 2000);
}

function doD() {
    console.log('D');
}

function doE() {
    console.log('E');
}

function doF() {
    console.log('F');
}


// Function calls with detailed execution flow:

doA(function() {
    // This anonymous function is the callback that will execute AFTER doA's setTimeout completes
    doB();
    doC(function(){
        // This inner anonymous function will execute AFTER doC's setTimeout completes
        doD();
    })
    doE();
})

doF();

// EXECUTION ORDER EXPLANATION:

// 1. doA() is called immediately with a callback function as argument
//    - Console: "A" is printed immediately
//    - doA starts a 2-second timer (setTimeout)

// 2. While the timer in doA is running, doF() is called immediately
//    - Console: "F" is printed immediately (while doA's timer is still counting down)

// 3. After 2 seconds, doA's setTimeout completes and executes its callback
//    - The anonymous function passed to doA now runs:
//      a. doB() is called → Console: "B"
//      b. doC() is called with another callback function
//         - Console: "C" is printed immediately
//         - doC starts another 2-second timer
//      c. doE() is called immediately (does NOT wait for doC to complete)
//         - Console: "E"

// 4. After another 2 seconds, doC's setTimeout completes and executes its callback
//    - The inner anonymous function runs: doD() is called → Console: "D"

// FINAL CONSOLE OUTPUT ORDER:
// "A" (immediately)
// "F" (immediately after A)
// "B" (after 2 seconds)
// "C" (immediately after B)
// "E" (immediately after C)
// "D" (after another 2 seconds - 4 seconds total from start)