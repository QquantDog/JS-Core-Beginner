(function () {
    // console.log(a) // - для let невозможно так как хоть let и всплывает(hoisting) но переменная находится в temporal dead zone
    let a = 5;

    // console.log(b) // - для var возможна так как всплывает(hoisting) и не вызывает ошибку; вернется undefined
    var b = 6;

    // const c; // - невозможно так как требуется инициализация сразу же
    // console.log(c) // - невозможно так как переменная в TDZ
    const c = 7;
})();
