function firstHalfSum(arr) {
    let sum = 0;
    for (let i = 0; (i < arr.length / 2) | 0; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(firstHalfSum([1, 2, 3, 4]));
console.log(firstHalfSum([1, 2, 3, 4, 5]));
