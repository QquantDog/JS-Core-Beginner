function lastStringSymbol(str) {
    if (typeof str != "string") throw new Error("Not a string");
    return str[str.length - 1];
}
console.log(lastStringSymbol("2323"));
console.log(lastStringSymbol("abc"));
