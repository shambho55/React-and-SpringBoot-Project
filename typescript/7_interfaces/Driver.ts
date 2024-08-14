import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

/*
console.log(myCricketCoach.getDailyWorkout());
console.log(myGolfCoach.getDailyWorkout());
*/

let myCoach:Coach[] = [];

myCoach.push(myCricketCoach);
myCoach.push(myGolfCoach);

for(let itrCoach of myCoach){
    console.log(itrCoach.getDailyWorkout());
}