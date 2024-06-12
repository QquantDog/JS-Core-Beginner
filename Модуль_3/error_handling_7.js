function twoNumber(a, b) {
    if (b === 0) throw new Error("Second number is zero");
    return a + b;
}

twoNumber(2, 0);
