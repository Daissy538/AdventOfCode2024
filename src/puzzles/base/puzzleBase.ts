import { PuzzleResult } from "./puzzleResult";
import fs from 'fs'

export enum PuzzlePart{
    ONE,
    TWO
}

export abstract class Puzzle {

    public puzzleNumber: number;

    constructor(puzzleNumber: number) {
        this.puzzleNumber = puzzleNumber;
    }

    protected abstract solvePartOne(input: string): number;

    protected abstract solvePartTwo(input: string): number;

    public getId(): number{
        return this.puzzleNumber;
    }

    public run (filePath: string, type: PuzzlePart): PuzzleResult {
        const startTime = Date.now();
        const input = this.readTextFileToBuffer(filePath);

        try{
            let result = -1;
            switch(type){
                case PuzzlePart.ONE:
                    result = this.solvePartOne(input);
                    break;
                default:
                    result = this.solvePartTwo(input);
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

    private readTextFileToBuffer(filePath: string): string{
        const text = fs.readFileSync(filePath, { encoding: "utf8" });
        return text;
    }

    private printResult(result: number, amount: number): void{
        console.log("Solved Puzzle: " + this.puzzleNumber + " | Result: " + result + " | Milliseconds: " + amount);
    }

}