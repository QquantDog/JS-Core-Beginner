function getRandom() {
    return 1 + ((Math.random() * 10) | 0);
}

let promise = new Promise((res, rej) => {
    let v = getRandom();
    setTimeout(v <= 5 ? res : rej, 1000*v, v)
});

promise.then(
    (v) => console.log("Success: ", v),
    (v) => console.log("Failure: ", v)
);