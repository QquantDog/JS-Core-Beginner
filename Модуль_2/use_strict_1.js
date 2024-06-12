function check(arr, value) {
    "use strict";
    return arr.findIndex((v) => v === value) == -1 ? false : true;
}

console.log(check([1, 2, 3], 2));
