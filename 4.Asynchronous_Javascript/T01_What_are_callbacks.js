// Define a function that takes a callback
function doSomething(callback) {
    // perform some action
    const result = Math.random() > 0.5;
    // Execute the callback with the result
    callback(result);
}

// Define a callback function
function onComplete(result) {
    console.log(`Task completed ${result}`);
}

// call the function and pass in the callback
doSomething(onComplete)