function enlarge(arr) {
    return arr.map((v) => v * 1.1);
}
function enlargeInPlace(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 1.1;
    }
    return arr;
}

console.log(enlarge([1, 2, 3]));
console.log(enlargeInPlace([1, 2, 3]));
