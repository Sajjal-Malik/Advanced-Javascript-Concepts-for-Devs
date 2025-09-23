function waitingFor(name, done) {
    // Log that we're waiting for this person
    console.log('Waiting for '+ name);

    // Simulate an asynchronous operation (like waiting for someone to arrive)
    // using a 2-second timeout
    setTimeout(function() {
        // Check if the person is Mike (who's always late)
        if (name === 'Mike') {
            // If it's Mike, call the callback with an error
            // This follows the error-first callback pattern
            done(new Error('Mike is always late!'));
        }
        else {
            // For anyone else, call the callback successfully
            // First parameter is null (no error), second is the name
            done(null, name);
        }
    }, 2000); // Wait for 2000ms (2 seconds) before executing
}

// Callback hell version
waitingFor('Bhatti', (error, result) => {
    if(error) {
        console.log(error.message);
    }
    else {
        console.log('We are good to go!');
        
        waitingFor('Sarah', (error, result) => {
            if(error) {
                console.log(error.message);
            }
            else {
                console.log('Sarah arrived!');
                
                waitingFor('John', (error, result) => {
                    if(error) {
                        console.log(error.message);
                    }
                    else {
                        console.log('John arrived!');
                        
                        waitingFor('Mike', (error, result) => {
                            if(error) {
                                console.log(error.message);
                            }
                            else {
                                console.log('Mike arrived!');
                                
                                waitingFor('Emily', (error, result) => {
                                    if(error) {
                                        console.log(error.message);
                                    }
                                    else {
                                        console.log('Emily arrived!');
                                        console.log('Finally, everyone is here!');
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});