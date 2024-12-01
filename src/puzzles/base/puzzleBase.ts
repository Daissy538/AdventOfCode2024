import { PuzzleResult } from "./PuzzleResult";

export enum PuzzleType{
    A,
    B
}

export abstract class Puzzle {

    public puzzleNumber: number;

    constructor(puzzleNumber: number) {
        this.puzzleNumber = puzzleNumber;
    }

    protected abstract solveA(input: string): number;

    protected abstract solveB(input: string): number;

    public getId(): number{
        return this.puzzleNumber;
    }

    public run (input: string, type: PuzzleType): PuzzleResult {
        const startTime = Date.now();

        try{
            let result = -1;
            switch(type){
                case PuzzleType.A:
                    result = this.solveA(input);
                    break;
                default:
                    result = this.solveB(input);
            }
  
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