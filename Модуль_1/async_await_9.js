async function wrapper(url){
    async function getData(url){
        try{
            const result = await fetch(url)
            return await result.json()
        } catch(err){
            return null
        }
    }
    console.log(await getData(url))
}

wrapper("https://jsonplaceholder.typicode.com/users");