function autoIncr(v = 0) {
    return function () {
        console.log(v++);
    };
}

setInterval(autoIncr(42), 1000, 5)