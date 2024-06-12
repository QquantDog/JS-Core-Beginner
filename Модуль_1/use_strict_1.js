function factorial(n) {
    "use strict";
    if (typeof n !== "number") throw Error("Not a number");
    if (n < 0 || Number.isNaN(n) || n > Number.MAX_SAFE_INTEGER) throw Error("Out of range");
    if(!Number.isInteger(n)) throw new Error("Not an integer")

    let res = 1;
    while (n != 0) {
        res *= n;
        n--;
    }
    return res;
}
console.log(factorial(5));
