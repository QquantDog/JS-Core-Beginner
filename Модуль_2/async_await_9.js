const CART_URL = "https://fakestoreapi.com/carts";
const USER_URL = "https://fakestoreapi.com/users";

async function wrapper(productId) {
    try {
        const response = await fetch(CART_URL);
        const carts = await response.json();
        if (carts == null) return console.log({});

        //отфильтровать корзинки где есть только продукт с опрделенным айди
        const carts_with_productId = carts.filter((el) => {
            if (el.products.some((record) => record.productId == productId)) return true;
            else return false;
        });
        // уникальные id пользователей у которых в корзинке лежит продукт с id которая передана в функцию в качестве аргумента
        const unique_user_ids = [...new Set(carts_with_productId.map((el) => el.userId))];
        if (unique_user_ids.length == 0) return console.log({});
        // способ вывести всех таких пользователей костыльный но задачу выполняет
        // выведем для простоты последнего пользователя
        const user = await fetch(`${USER_URL}/${unique_user_ids[unique_user_ids.length - 1]}`);
        const result = await user.json();
        console.log(result);
        return result;
    } catch (err) {
        console.log(err.message);
    }
}
// индексы 1-12 точно есть, кроме 4,11
const productId = 10;
wrapper(productId);
