function enlarge(arr){
    return arr.map(v=>v*1.1)
}
function enlargeInPlace(arr) {
    return arr.map((_,ind,arr) => arr[ind] * 1.1);
}

console.log(enlarge([1,2,3]))
console.log(enlargeInPlace([1, 2, 3]));