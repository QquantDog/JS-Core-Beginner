// функция сфетчит данные с урловб откинет неудачные фетчи, смаппит промисы на результаты, подождет пока они преобразуются в json и выведет все результаты в консоль
function loadData(url_arr) {
    let promise_arr = [];

    url_arr.forEach((url) => promise_arr.push(fetch(url)));

    Promise.allSettled(promise_arr)
        .then((data) => data.filter((el) => el.status === "fulfilled").map((el) => el.value))
        .then((data) => {
            return Promise.all(
                data.map((el) => {
                    return el.json();
                })
            );
        })
        .then(console.log)
        .catch((err) => console.log(err.message));
}

// допуская ошибки в урл они автоматически откидываются
let url_arr = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts", "qqqqq"];
loadData(url_arr);
