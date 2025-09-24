function setHeight(value) {
    return value * 10;
}

function box(height = setHeight(50), color = 'red', url = 'fullstacklearning.com') {
    console.log(`Height is: ${height} | Color is ${color} | url is ${url}`);
}

box();
box(0, 'blue');
box(0, 'green', 'scrimba/fullstack.com');



function mutliply(num1, num2 = num1) {
    return num1 * num2;
}

console.log(mutliply(2));