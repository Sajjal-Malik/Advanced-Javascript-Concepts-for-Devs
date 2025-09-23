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

// calling the function with Promise
waitingFor('Malik')
    // if promise is resolved
    .then((Malik) => waitingFor('Bhatti ' + Malik))
    .then((Bhatti) => waitingFor('Rana ' + Bhatti))
    .then((Rana) => waitingFor('Bajwa ' + Rana))
    .then(() => console.log('Greate! we got everyone NOW'))
    // if posmise is rejected
    .catch((error) => console.log(error));