// не совсем понял что такое первый не повторяющийся символ
// считаю что это символ который слева и справа имеет символы не равные себе

function firstNotRepeatable(str) {
    if (typeof str != "string") throw new Error("not a string");
    if (str == "") return;
    if (str.length == 1) return str[0];
    if (str.length == 2) {
        if (str[0] != str[1]) return str[0];
        else return;
    }

    if (str[0] != str[1]) return str[0];
    for (let i = 1; i < str.length - 1; i++) {
        if (str[i] != str[i - 1] && str[i] != str[i + 1]) return str[i];
    }
    if (str[str.length - 1] != str[str.length - 2]) return str[str.length - 1];
    else return;
}

console.log(firstNotRepeatable("j"));
console.log(firstNotRepeatable("aj"));
console.log(firstNotRepeatable("aaaaabhbcc"));
