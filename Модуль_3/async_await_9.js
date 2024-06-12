// функция сфетчит данные с урловб откинет неудачные фетчи, смаппит промисы на результаты, подождет пока они преобразуются в json и выведет все результаты в консоль
async function loadData(url_arr) {
    let promise_arr = [];

    url_arr.forEach((url) => promise_arr.push(fetch(url)));

    try{
        const data = await Promise.allSettled(promise_arr);
        const filtered_data = data.filter((el) => el.status === "fulfilled").map((el) => el.value);

        let deserialized_promises = [];
        // лучше бы это сделать через for await, но какая задача такая задача
        for (let record of filtered_data) {
            deserialized_promises.push(record.json());
        }

        (await Promise.all(deserialized_promises)).forEach(console.log);
    } catch(err){
        console.log("err: ", err.message)
    }

}

// допуская ошибки в урл они автоматически откидываются
let url_arr = ["https://jsonplaceholder.typicode.com/users", "https://jsonplaceholder.typicode.com/posts", "qqqqq"];
loadData(url_arr);
