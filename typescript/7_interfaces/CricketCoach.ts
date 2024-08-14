import { Coach } from "./Coach";

export class CricketCoach implements Coach{

    getDailyWorkout(): string {
        return "Practice 100 balls with atleast 10 sixes."
    }

}