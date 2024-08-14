"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new GolfCoach_1.GolfCoach();
/*
console.log(myCricketCoach.getDailyWorkout());
console.log(myGolfCoach.getDailyWorkout());
*/
var myCoach = [];
myCoach.push(myCricketCoach);
myCoach.push(myGolfCoach);
for (var _i = 0, myCoach_1 = myCoach; _i < myCoach_1.length; _i++) {
    var itrCoach = myCoach_1[_i];
    console.log(itrCoach.getDailyWorkout());
}
