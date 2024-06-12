function isInteger(v) {
    if (!Number.isInteger(v)) throw new Error("Not an integer");
}
isInteger(5);
isInteger(3.2);
isInteger("a");
