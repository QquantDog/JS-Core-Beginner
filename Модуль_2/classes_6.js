class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getSquare() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}

let r = new Rectangle(5, 7)
console.log(r.getSquare())
console.log(r.getPerimeter());