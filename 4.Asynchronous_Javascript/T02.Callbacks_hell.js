function waitingFor(name, done) {
    console.log('Waiting for '+ name);

    setTimeout(function() {
        if (name === 'Mike') {
            done(new Error('Mike is always late!'));
        }
        else {
            done(null, name);
        }
    }, 2000);
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