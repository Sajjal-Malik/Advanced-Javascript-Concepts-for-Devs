const PROMISE_STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected',
};

// Our Custom Promise Implementation
class MyPromise 
{
    #state = PROMISE_STATE.PENDING;
    #value = null;
    #thenCallback = [];
    #catchCallback = [];

    constructor (executorFunc) {
        try{
            executorFunc(this.#resolve.bind(this), this.#reject.bind(this));
        }
        catch(error) {
            this.#reject(error);
        }
    }

    then(onFulFilled, onRejected) {

        const onFulFilledWithResolve = () => {}
        
        const onRejectedWithResolve = () => {}

        // return a new promise
        return new MyPromise((resolve, reject) => {

            // check the state - if pending save the then and rejected callbacks
            if(this.#state === PROMISE_STATE.PENDING) {

                this.#thenCallback.push(onFulFilledWithResolve)
            }

        });
    }

    catch() {

    }
    // # is used to make property or method private
    #resolve() {

    }
    // # is used to make property or method private
    #reject() {

    }
}