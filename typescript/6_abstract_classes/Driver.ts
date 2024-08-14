import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

// let myShape = new Shape(9,15);
//console.log(myShape.getInfo());

let myCircle = new Circle(3,4,5);
// console.log(myCircle.getInfo());

let myRectangle = new Rectangle(7,8,9,5);
// console.log(myRectangle.getInfo());

let shapeArray:Shape[] = [];

// shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectangle);


for(let itrShape of shapeArray){
    console.log(itrShape.getInfo());
    console.log("Area = " + itrShape.calculateArea());
}