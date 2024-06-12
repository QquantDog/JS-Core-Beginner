function bubbleSortAsc(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            // поменять знак на < для минимального элемента в коцне массива - то есть для убывающей сортировки
            if (arr[j] > arr[j + 1]) {
                let t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }
        }
    }
    return arr;
}

console.log(bubbleSortAsc([1, 2, 1, -2]));
console.log(bubbleSortAsc([1, 2, 1, -2, -3, -3, 2, 2, 4, 5, 7, -5, 2, 1]));
