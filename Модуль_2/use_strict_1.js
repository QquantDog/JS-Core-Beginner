'use strict'
function check(arr, value){
    return arr.find(v=>v===value)
}

console.log(check([1, 2, 3], 2));