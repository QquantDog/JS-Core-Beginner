function sumSquares(arr) {
    return arr.reduce((acc, v) => acc + v * v);
}
console.log(sumSquares([1, 2, 3]));
console.log(sumSquares([1, 2, -3]));
console.log(sumSquares([1, 2, 3, 4]));
