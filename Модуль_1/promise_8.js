//get data from https://jsonplaceholder.typicode.com/posts

// function getData(url) {
//     return new Promise((res) => {
//         res(fetch(`${url}`));
//     });
// }

function getData2(arr) {
    return new Promise((res) => {
        setTimeout(res, 50, arr);
    });
}

// getData("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => data.json())
//     .then((data) =>
//         data.map((el) => {
//             return { ...el, mark: "JSPlaceHolderData" };
//         })
//     )
//     .then(console.log)
//     .catch((err)=>console.log("Error while fetching or converting: ", err.message));

getData2([1, 2, 3])
    .then((data) => {
        if (Math.random() > 0.5) {
            return data.reverse().join("-");
        } else {
            throw new Error("Whoops random god is not on your side");
        }
    })
    .then(console.log, (err) => console.log(err.message));
