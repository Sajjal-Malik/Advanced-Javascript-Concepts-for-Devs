function waitingFor(name) {
    return new Promise((resolve, reject) => {
        console.log('Waiting for ' + name);
        setTimeout(function() {
            if(name === 'Mike') {
                reject(new Error(name + ' is always late'));
            }
            else {
                // this will be returned if the the promis resolved
                // resolve('If promise resolves this is printed!');

                // if we pass the veriable value here it will be caught in .then()
                resolve(name);
            }
        }, 2000);
    })
}

function logName(name) {
    if (name === 'late') {
        console.log('Mike is late again.');
    }
    else {
        console.log(`Great ${name} is here.`);
    }
}

// calling the function with Promise
waitingFor('Bhatti')
    // if promise is resolved return another promise and so on
    .then((name) => {
        logName(name);
        return waitingFor('Malik');
    })
    .catch((error) => {
        console.log('Error while waiting for ', error.message);
    })
    .then((name) => {
        logName(name);
        return waitingFor('Bajwa');
    })
    .then((name) => {
        logName(name);
        return waitingFor('Mike');
    })
    .catch((error) => {
        console.log('Error while waiting for ', error.message);
        return 'late';
    })
    .then((name) => {
        logName(name);
        console.log('Greate! we got everyone NOW')
    })
    // if posmise is rejected and returns a promise and so on
    .catch((error) => console.log(error));