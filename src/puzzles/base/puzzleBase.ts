import { PuzzleResult } from "./PuzzleResult";

export abstract class Puzzle {

    public puzzleNumber: number;

    constructor(puzzleNumber: number) {
        this.puzzleNumber = puzzleNumber;
    }

    protected abstract solve(input: string): number;

    public getId(): number{
        return this.puzzleNumber;
    }

    public run (input: string): PuzzleResult {
        const startTime = Date.now();

        try{
            const result = this.solve(input);

            const endTime = Date.now();

            const milliseconds = (endTime - startTime);
            
            this.printResult(result, milliseconds);

            return {
                resultNumber: result,
                duriationMiliseconds: milliseconds
            }
        }catch(error){
            console.error("Could not solve puzzle: "+ this.puzzleNumber, error);
            throw error;
        }
    }

    private printResult(result: number, amount: number): void{
        console.log("Solved Puzzle: " + this.puzzleNumber + " | Result: " + result + " | Milliseconds: " + amount);
    }

}