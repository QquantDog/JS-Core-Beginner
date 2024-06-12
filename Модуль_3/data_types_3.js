function firstAndLastDigitSum(n) {
    if (typeof n != "number") throw new Error("Not a number");
    let str = Math.abs(n).toString();
    return +str[0] + +str[str.length - 1];
}

console.log(firstAndLastDigitSum(12325));
console.log(firstAndLastDigitSum(-12));
console.log(firstAndLastDigitSum(-1245678912345));
console.log(firstAndLastDigitSum(-12.78));
