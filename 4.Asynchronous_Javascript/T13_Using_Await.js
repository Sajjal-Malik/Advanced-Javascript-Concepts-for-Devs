async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('wait Done!');
        }, 1000);
    })

    let result = await promise;

    console.log(result);
}

f();