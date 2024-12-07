import { Puzzle } from "./base/puzzleBase";

export class Puzzle7 extends Puzzle {
    protected solvePartOne(input: string): number {
        const calculations = this.readLines(input);

        let sum = 0;
        calculations.forEach((value) => {
           const result =this.CanCalculate(value[1], value[0], value[1][0]);
           if(result){
            sum += value[0];
           }
        });

        return sum;
    }

    private CanCalculate(numbers: number[], expected: number, total: number): boolean{
        if(numbers.length === 1 && total !== expected){
            return false;
        }
        else if(numbers.length === 1 && total === expected){
            return true;
        }
        
        let response = false;
        if(total * numbers[0+1] <= expected){ 
            if(this.CanCalculate([...numbers].splice(1), expected,total * numbers[0+1])){
                response = true;
            }           
        }

        if(total + numbers[0+1] <= expected){            
           if( this.CanCalculate([...numbers].splice(1), expected,total + numbers[0+1])){
            response = true;
           }   
        }

        return response;
    }

    protected solvePartTwo(input: string): number {
        throw new Error("Method not implemented.");
    }

    private readLines(input: string): [number,number[]][] {
        const response: [number,number[]][] = [];
        const lines = input.split("\n");

        lines.forEach((line) => {
            const totalCalculation = line.split(":");
            const answer = Number(totalCalculation[0]);
            const calculation = totalCalculation[1].trim().split(" ").map(Number);
            response.push([answer, calculation]);
        });


        return response;

    }
}