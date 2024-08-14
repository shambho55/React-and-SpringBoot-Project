"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
// let myShape = new Shape(9,15);
//console.log(myShape.getInfo());
var myCircle = new Circle_1.Circle(3, 4, 5);
// console.log(myCircle.getInfo());
var myRectangle = new Rectangle_1.Rectangle(7, 8, 9, 5);
// console.log(myRectangle.getInfo());
var shapeArray = [];
// shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectangle);
for (var _i = 0, shapeArray_1 = shapeArray; _i < shapeArray_1.length; _i++) {
    var itrShape = shapeArray_1[_i];
    console.log(itrShape.getInfo());
    console.log("Area = " + itrShape.calculateArea());
}
