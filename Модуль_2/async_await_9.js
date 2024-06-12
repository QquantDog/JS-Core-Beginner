const PRODUCTS_URL = "https://fakestoreapi.com/products";

async function getData(url) {
    try {
        const result = await fetch(url);
        return await result.json();
    } catch (err) {
        return null;
    }
}

async function wrapper() {
    // найти userId первого поста из отсортированных у которого число слов больше 7
    let products = await getData(PRODUCTS_URL);
    if (products == null) return [];

    const products_ids
    console.log(products)

    // const userId = posts.filter((el) => el.body.split(" ").length > 7).sort()[0].userId;
    //выдать все данные по пользователю
    // try {
    //     const user = await fetch(``);
    // } catch {
    //     return [];
    // }
}

wrapper();
