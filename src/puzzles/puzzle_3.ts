import { Puzzle } from "./base/puzzleBase";

export class Puzzle3 extends Puzzle {
    protected solvePartOne(input: string): number {
        let instruction = input;
        let regex = /mul\([0-9]*,[0-9]*\)/g;

        const mulInstructions = [...instruction.matchAll(regex)];


        return this.sumTotalsMuls(mulInstructions);
    }

    protected solvePartTwo(input: string): number {
        let instruction = input;
        let regexDos = /(don't\(\)|do\(\))/g;

        const doMatches = [...instruction.matchAll(regexDos)];
    
        const substrings: string[] = []
        substrings.push(instruction.substring(0, doMatches[0].index));
        doMatches.forEach((match, index) => {
            if(match[0] !== "don't()"){
                if(doMatches[index+1]){
                    substrings.push(instruction.substring(match.index, doMatches[index+1].index));

                }else{
                    substrings.push(instruction.substring(match.index));
                }
            }
        });

        let totals = 0;
        substrings.forEach(s => {

            let regex = /mul\([0-9]*,[0-9]*\)/g;

            const mulInstructions = [...s.matchAll(regex)];
            
            totals = totals + this.sumTotalsMuls(mulInstructions)
        });

        return totals;
    }


    sumTotalsMuls(mulInstructions: RegExpExecArray[]): number{
        let total = 0;
        mulInstructions.forEach(instructions => {
            const mul = ((value1: number, value2: number) => {
                return value1 * value2;
            });

            total = total + eval(instructions[0]);
        })

        return total;
    }
}