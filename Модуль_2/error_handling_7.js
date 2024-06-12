function typeError(){
    try{
        Math.random() > 0.5 ? undefined.property : null.property
    } catch(err){
        if(err instanceof TypeError) console.log(err.message);
    }
}
typeError()
// undefined.property;
// null.property;