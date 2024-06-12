function twoNumber(a, b) {
    if (b === 0) throw new Error("Second number is zero");
    return a + b;
}

console.log(twoNumber(2, 1));
console.log(twoNumber(2, 0));
