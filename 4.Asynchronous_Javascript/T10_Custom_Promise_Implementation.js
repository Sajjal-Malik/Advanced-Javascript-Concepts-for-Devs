const PROMISE_STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
};

// Our Custom Promise Implementation
class MyPromise {
    #state = PROMISE_STATE.PENDING;
    #value = null;
    #thenCallback = [];
    #catchCallback = [];

    constructor(executorFunc) {
        try {
            executorFunc(this.#resolve.bind(this), this.#reject.bind(this));
        }
        catch (error) {
            this.#reject(error);
        }
    }

    then(onFulfilled, onRejected) {

        // return a new promise
        return new MyPromise((resolve, reject) => {

            const onFulfilledWithResolve = () => {
                // catch if callback function is passed
                if (!onFulfilled) {
                    return resolve(this.#value);
                }
                queueMicrotask(() => {
                    // call onfulfilled and pass the settled value
                    try {
                        const value = onFulfilled(this.#value);
                        if(value instanceof MyPromise) {
                            value.then(resolve, reject);
                            return;
                        }

                        resolve(value);
                    }
                    catch (error) {
                        reject(error);
                    }
                    // call resolve pass value that comes back from unfulfilled callback
                });
            }

            const onRejectedWithResolve = () => {
                if (!onRejected) {
                    return resolve(this.#value);
                }
                queueMicrotask(() => {
                    try {
                        const value = onRejected(this.#value);
                        resolve(value);
                    }
                    catch (error) {
                        reject(error);
                    }
                });

            }

            // check the state - if pending save the then and rejected callbacks
            if (this.#state === PROMISE_STATE.PENDING) {
                this.#thenCallback.push(onFulfilledWithResolve);
                this.#catchCallback.push(onRejectedWithResolve);
            }
            else if (this.#state === PROMISE_STATE.FULFILLED) {
                onFulfilledWithResolve();
            }
            else if (this.#state === PROMISE_STATE.REJECTED) {
                onRejectedWithResolve();
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }
    // # is used to make property or method private
    #resolve(value) {
        this.#value = value;
        this.#state = PROMISE_STATE.FULFILLED;
        this.#thenCallback.forEach((cb) => cb());
    }
    // # is used to make property or method private
    #reject(value) {
        this.#value = value;
        this.#state = PROMISE_STATE.REJECTED;
        this.#thenCallback.forEach((cb) => cb());
    }
}


function waitingFor(name) {
    return new MyPromise((resolve, reject) => {
        console.log('Waiting for ' + name);
        setTimeout(function () {
            if (name === 'Mike') {
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

waitingFor('Bhatti')
    // if promise is resolved return another promise and so on
    .then((name) => {
        console.log('Greate! ', name, ' is here.');
        return waitingFor('Malik');
    })
    .then((name) => {
        console.log('Greate! ', name, ' is here.');
    })
    .catch((error) => {
        console.log(error);
    });
