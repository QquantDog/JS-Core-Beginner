function isInteger(v) {
    if (!Number.isInteger(v)) throw new Error("Not an integer");
    console.log("arg is ", v)
}
isInteger(5);
isInteger(3.2);
isInteger("a");
