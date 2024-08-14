import { Coach } from "./Coach";

export class GolfCoach implements Coach{

    getDailyWorkout(): string {
        
        return "Hit 10 balls consecutively to hole.";

    }

}