class Vector{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    
    plus(vector){
        let newX = this.x + vector.x;
        let newY = this.y + vector.y;
        return new Vector(newX, newY);
    }
    
    minus(vector){
        let newX = this.x - vector.x;
        let newY = this.y - vector.y;
        return new Vector(newX, newY);
    }
    
    get length(){
        const a = (this.x)^2;
        const b = (this.y)^2;
        const c = Math.sqrt(a+b);
        return c;
    }
}

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vector(3, 4).length);