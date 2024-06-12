function typeError(){
    try{
        undefined.property
    } catch(err){
        if(err instanceof TypeError) console.log(err.message);
        else console.log("some other error")
    }
}
typeError()