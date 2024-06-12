class Human{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    toString(){
        return "Human: " + this.name + " age: " + this.age + " country: " + this.country
    }
    info(){
        console.log(this.toString());
    }
}

let h1 = new Human("max", 12, "Kenya")
let h2 = new Human("oleg", 16, "Mozambique");

h1.info()
h2.info();