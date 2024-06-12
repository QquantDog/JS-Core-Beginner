'use strict'
function vowelsCount(str) {
    return [...str.matchAll(/[aeiou]/gi)].length;
}
console.log(vowelsCount("avb"));
console.log(vowelsCount("abceIf"));
console.log(vowelsCount("abcdefgeghA_343o"));
