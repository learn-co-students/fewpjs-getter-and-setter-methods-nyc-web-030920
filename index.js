// Add your Circle class here

class Circle{
    constructor(radius){
        this.radius = radius
    }

    get diameter(){
        return 2* this.radius
    }

    set diameter(newDiameter){
        this.radius = newDiameter/2
    }

    get circumference(){
        return 2*Math.PI*this.radius
    }

    set circumference(newCirc){
        this.radius = newCirc/(2*Math.PI)
    }

    get area(){
        return Math.PI * (this.radius **2)
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea/Math.PI)
    }
}

let c = new Circle(5)