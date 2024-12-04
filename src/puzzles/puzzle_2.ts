import { Puzzle } from "./base/puzzleBase";

export class Puzzle2 extends Puzzle {
    protected solvePartOne(input: string): number {
        let board = this.readLines(input);

        let ammountCorrect = 0;
        for(let i= 0; i < board.length;  i++){
            if(this.isSafe(board[i])){
                ammountCorrect++;
            }
        }

        return ammountCorrect;
    }

    protected solvePartTwo(input: string): number {
        let board = this.readLines(input);

        let ammountCorrect = 0;
        for(let i= 0; i < board.length;  i++){

            if(this.isSafe(board[i])){
                ammountCorrect++;
                continue;
            }
            
            for(let j = 0; j< board[i].length; j++){
                const correctedReport = [...board[i]]
                correctedReport.splice(j, 1);

                if(this.isSafe(correctedReport)){
                    ammountCorrect++;
                    break;
                }
            }

        }
    

        
        return ammountCorrect;
    }

    readLines(input: string): number[][] {

        const response: number[][] = [];

        const lines =  input.split("\r\n");

        lines.forEach((line) => {
            const numbers = line.split(" ");
            
            response.push(numbers.map(n => Number(n)));
        });

        return response;

    }

    isEqual(list1:number[], list2: number[]): boolean{
        if (list1.length !== list2.length) return false;

        for (var i = 0; i < list1.length; ++i) {
            if (list1[i] !== list2[i]) return false;
        }

        return true;
    }

    isSafe(report: number[]): boolean{
        let correctDifference = true;

        let previousDifferences = [];
        for(let j=0; j < report.length-1; j++){

          const difference = report[j] - report[j+1];

          const positive = difference > 0 && difference >= 1 && difference <= 3;
          const negative = difference < 0 && difference <= -1 && difference >= -3;

          if(!positive && !negative){
            correctDifference = false;
            break;
          }

          if(previousDifferences.length != 0 && ((previousDifferences[previousDifferences.length-1] < 0 && difference > 0) || (previousDifferences[previousDifferences.length-1] > 0 && difference < 0))){
            correctDifference = false
            break;
          }

          previousDifferences.push(difference);
        }

        return correctDifference;
    }

}