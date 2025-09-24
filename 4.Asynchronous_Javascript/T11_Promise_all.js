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

const promise1 = waitingFor('Malik');
const promise2 = waitingFor('Bajwa');
const promise3 = waitingFor('Mike');
const promise4 = waitingFor('Rana');

Promise.all([promise1, promise2, promise3, promise4])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error);
    })