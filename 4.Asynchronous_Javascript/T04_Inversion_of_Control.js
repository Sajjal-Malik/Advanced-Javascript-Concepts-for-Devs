// Analytics library object
const analytics = {
    // callback are usually defined as last argument
    trackPurchase: function(data, callback) {
        // process data
        console.log(data.customer_id);
        console.log(data.payment_method);
        
        // call the callback function
        callback();
    }
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

// object calling method with argument(data, callback(){})
analytics.trackPurchase(purchaseData, function() {
    chargeCreditCard();
    displayThankYouPage();
});
