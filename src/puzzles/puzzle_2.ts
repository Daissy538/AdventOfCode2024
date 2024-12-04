import { Puzzle } from "./base/puzzleBase";

export class Puzzle2 extends Puzzle {
    protected solvePartOne(input: string): number {
        let board = this.readLines(input);

        let ammountCorrect = 0;
        for(let i= 0; i < board.length;  i++){
            let correctDifference = true;

            let previousDifferences = [];
            for(let j=0; j < board[i].length-1; j++){

              const difference = board[i][j]-board[i][j+1];

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

            if(correctDifference){
                ammountCorrect++;
            }
        }

        return ammountCorrect;
    }

    protected solvePartTwo(input: string): number {
        let board = this.readLines(input);

        let ammountCorrect = 0;
        for(let i= 0; i < board.length;  i++){
            let correctDifference = true;

            let previousDifferences = [];
            let correctedArrayOnes = false;
            for(let j=0; j < board[i].length-1; j++){
              let difference = board[i][j]-board[i][j+1];
   
              let positiveCorrect = difference > 0 && difference >= 1 && difference <= 3;
              let negativeCorrect = difference < 0 && difference <= -1 && difference >= -3;
              let sortingInCorrect = (previousDifferences.length != 0 
                && ((previousDifferences[previousDifferences.length-1] < 0 && difference > 0) 
                || (previousDifferences[previousDifferences.length-1] > 0 && difference < 0)));

              if((!positiveCorrect && !negativeCorrect) || 
              sortingInCorrect){
                if(correctedArrayOnes){
                    console.log("Check 1", board[i], board[i][j], correctedArrayOnes);
                    correctDifference = false;
                    break;
                }

                if(j+2 <= board[i].length-1){
                    difference = board[i][j]-board[i][j+2];
   
                    positiveCorrect = difference > 0 && difference >= 1 && difference <= 3;
                    negativeCorrect = difference < 0 && difference <= -1 && difference >= -3;
                    sortingInCorrect = (previousDifferences.length > 0 
                        && ((previousDifferences[previousDifferences.length-1] < 0 && difference > 0) 
                        || (previousDifferences[previousDifferences.length-1] > 0 && difference < 0)));

      
                    if((!positiveCorrect && !negativeCorrect) || 
                    sortingInCorrect){
                      console.log("Check 2 fail", board[i], board[i][j], correctedArrayOnes);
                      correctDifference = false;
                      break;
                    }
                }

                console.log("Check 2 succes", board[i], board[i][j], correctedArrayOnes);
                correctedArrayOnes = true;
                previousDifferences.push(difference);
                j++;
          
              }else{
                previousDifferences.push(difference);
              }

            
            }

            if(correctDifference){
                ammountCorrect++;
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

}