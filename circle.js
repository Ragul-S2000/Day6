class Circle{
    constructor(colour,radius){
        this.colour=colour,
        this.radius=radius
    }
    get radiusCircle(){
        return this.radius;
    };
    set radiusCircle(radius){
        return this.radius=radius;
    };
    get colourCircle(){
        return this.colour;  
    };
    set colourCircle(colour){
        return this.colour=colour;
    }
    get toString(){
        return`"circle[radius=${this.radius},colour=${this.colour}]"`
    }
    get areaCircle(){
        return Math.PI*this.radius*this.radius;
    }
    get circumferenceCircle(){
        return 2*Math.PI*this.radius;
    }
}
var circle1=new Circle("red",1.0)
console.log(circle1.radius)
circle1.radius=3.3;
console.log(circle1.radius)
console.log(circle1.colour)
console.log(circle1.toString)
console.log(circle1.areaCircle)
console.log(circle1.circumferenceCircle)