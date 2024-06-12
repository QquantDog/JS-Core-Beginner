// для итерации по ключам считаем что Object.keys достаточна
// она перебирает все enumerable string(есть еще symbol) properties объекта ограничиваясь текущим объектом, а не цепочкой прототипов
// function deepComparing(o)
// function nullObjEquality

function deepEqual(o1, o2) {
    if (typeof o1 != "object" || typeof o2 != "object") return false;

    if (o1 == null) {
        if (o2 == null) return true;
        else return false;
    } else if (o2 == null) {
        if (o1 == null) return true;
        else return false;
    }

    if (o1 === o2) return true;

    function traverseInDepth(o1, o2) {
        let keys_first = Object.keys(o1);
        let keys_second = Object.keys(o2);
        if (keys_first.length != keys_second.length) return false;
        for (let i = 0; i < keys_first.length; i++) {
            let p1 = o1[keys_first[i]];
            let p2 = o2[keys_second[i]];
            // равенство имен свойств
            if (keys_first[i] != keys_second[i]) return false;
            let t1 = typeof p1;
            let t2 = typeof p2;
            // равенство типов
            if (t1 != t2) return false;
            //туперь у нас одинаковы типы - проблемы только с null/object
            if (t1 != "object") {
                if (p1 != p2) return false;
            } else {
                //это условие можно ужать но так лучше воспринимается
                if (p1 == null && p2 != null) return false;
                else if (p1 != null && p2 == null) return false;
                else if (p1 == null && p2 == null)
                    void 0; // пропуск действия - ветка нужна чтобы else-ом случайно в нее не войти(перебор полного пространства исходов)
                else {
                    //возможные всплытия условия - false и undefined
                    if (traverseInDepth(p1, p2) === false) return false;
                }
            }
        }
        return true;
    }
    return traverseInDepth(o1, o2);
}

console.log("\nShould be true: ");
console.log(deepEqual({ a: 1 }, { a: 1 }));
console.log(deepEqual(null, null));
console.log(
    deepEqual(
        { p_1_1: [1, 2, 3], p_1_2: { p_2_1: false, p_2_2: [6, -4] } },
        { p_1_1: [1, 2, 3], p_1_2: { p_2_1: false, p_2_2: [6, -4] } }
    )
);

console.log("\nShould be false: ");
console.log(deepEqual({ a: 1 }, { b: 1 }));
console.log(deepEqual({ a: 1 }, { a: 2 }));
console.log(deepEqual({ a: 1 }, { a: 1, b: 1 }));
console.log(deepEqual(1, { a: 1, b: 1 }));

console.log(
    deepEqual(
        { p_1_1: [1, 2, 3], p_1_2: { p_2_1: false, p_2_2: [6, -5] } },
        { p_1_1: [1, 2, 3], p_1_2: { p_2_1: false, p_2_2: [6, -4] } }
    )
);
console.log(
    deepEqual(
        { p_1_1: [1, 2, 3], p_1_2: { p_2_1: false, p_2_2: [6, -4] } },
        { p_1_1: [1, 2, 3], p_1_2: { p_2_2: false, p_2_2: [6, -4] } }
    )
);
