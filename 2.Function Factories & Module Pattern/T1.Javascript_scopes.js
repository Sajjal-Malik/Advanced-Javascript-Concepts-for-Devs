// global scope
let x = 10;

// defining the function
function printX() {
    console.log(x);
}

printX();



// local scope
function myFunction() {
    let y = 5;
    console.log(y);
}

console.log(y); // y cannot be accessed outside the functon now




// nested functions scope
function outerFunction() {
    let z = 40;

    function innerFunction() {
        console.log(z);

        let x = 10;

        console.log(a);  // a is not defined inside this inner and it's outer so it will give error

        function innerInsideInnterFunction() {
            console.log(z, x);

            let a = 5;

            console.log("Double inner function value a: ", a);
        }

        // defining and calling another inner function inside inner function
        innerInsideInnterFunction();
    }

    // defining and calling inner function inside outer function
    innerFunction();
}

outerFunction();




// block scope
if (true) {
    let c = 4;
    console.log('c equals: ', c);
}
console.log(c);