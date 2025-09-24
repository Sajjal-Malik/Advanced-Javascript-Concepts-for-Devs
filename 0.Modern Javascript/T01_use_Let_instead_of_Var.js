function showNamesLength(names) {
    if (names.length > 5){
        let moreThanFive = 'Yes greate than 5';
        console.log(moreThanFive);
    }
    else  {
        let lessThanFive = 'Not greater than 5';
        console.log(moreThanFive);  // this will give undefined because of usng 'var' (out of scope)
        console.log(lessThanFive);
    }
}

showNamesLength(['Malik', 'Bhatti', 'Rana', 'Bajwa', 'Usman']);