const STOCK_URL =
    "https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2023-01-09?adjusted=true&apiKey=4Q3tDjnytR4YHQviIUpTgZmmfgvSZopM";

async function wrapper(t) {
    let controller = new AbortController();

    try {
        const result_promise = fetch(STOCK_URL, {
            signal: controller.signal,
        });
        // у меня одной секунды не хватало, а три - норм
        setTimeout((controller) => controller.abort(), t * 1000, controller);
        const result = await result_promise;
        console.log("data: ", await result.json());
    } catch (err) {
        console.log("err: ", err.message);
    }
}
const time_in_seconds = 1;
wrapper(time_in_seconds);
