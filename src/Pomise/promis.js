export let myPromise = new Promise((resolve) => {
    let rand;
    setTimeout(() => {
            rand = Math.random()
        }, 1000
    )
    setTimeout(() => {
            resolve(rand)
        }, 2000
    )
});

let promise3 = doAfter(3);
promise3.then(() => console.log('я сработал через 3 секунд'));
promise3.then(() => console.log('и я тоже следом сработал через 3 секунд'));
promise3.then(() => console.log('и я'));