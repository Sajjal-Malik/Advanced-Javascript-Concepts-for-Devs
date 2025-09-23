// Analytics library object
const analytics = {
    // callback are usually defined as last argument
    trackPurchase: function (data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // process data
                resolve(true);
                // if error -> reject()
            }), 2000;
        });
    },
}

function chargeCreditCard() {
    console.log('Credit card charged!');
}

function displayThankYouPage() {
    console.log("Thanks for your Purchase!");
}

// data object
const purchaseData = {
    customer_id: 123,
    payment_amount: 3419,
};
// Creates an object containing purchase information with customer ID and payment amount

const analyticsPromise = analytics.trackPurchase(purchaseData);
// Calls analytics service to track the purchase and returns a promise
// This promise will resolve when analytics recording is complete

const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(false);
    },5000);
});
// Creates a timer promise that automatically resolves to false after 5 seconds
// This acts as a timeout mechanism

Promise.race([analyticsPromise, timerPromise])
    // Uses Promise.race to wait for whichever promise completes first
    // If analytics completes within 5 seconds, analyticsPromise wins
    // If analytics takes longer than 5 seconds, timerPromise wins
    
    .then((result) => {
        if (result) {
            // Analytics recorded!
            return console.log('Analytics done - we can finalize Transaction Now.')
        }
        return console.log('Some Problem occured with analytics');
    })
    // Handles the result: 
    // - If result is true (analytics completed successfully), log success message
    // - If result is false (timer expired or analytics failed), log error message
    
    .catch((error) => {
        console.log(error);
    })
    // Catches any errors that might occur in either promise