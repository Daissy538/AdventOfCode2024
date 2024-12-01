import { Puzzle } from "./base/puzzleBase";

export class Puzzle1 extends Puzzle {
    protected solvePartTwo(input: string): number {
        let board = this.readLines(input);
        board = this.sortBoard(board);

        const amountMatchesList = [];
        const rightList = board[1];
        for(let i= 0; i < board[0].length; i++){
            const left = board[0][i];

            const result = left * this.getAmountOfOccurances(left, rightList)
            amountMatchesList.push(result);
        }

        return this.sumList(amountMatchesList);
    }

    protected override solvePartOne(input: string): number {
        
        let board = this.readLines(input);
        board = this.sortBoard(board);

        const difference = [];
        for(let i= 0; i < board[0].length; i++){
            const left = board[0][i];
            const right = board[1][i];

            difference.push(this.getDifferenceBetweenNumber(left, right));
        }

        return this.sumList(difference);
    }

    private sumList(list: number[]): number{
        return list.reduce((previousValue: number, currentValue: number) => {
            return previousValue + currentValue
        }, 0);
    }

    private sortBoard(board: [number[],number[]]){
        board[0] = board[0].sort();
        board[1] = board[1].sort();

        return board;
    }

    private getAmountOfOccurances(numberToFind: number, numbers: number[]): number{
        return numbers.filter((n) => n === numberToFind).length;
    }

    private getDifferenceBetweenNumber(number1: number, number2: number){
        return Math.abs(number1-number2);
    }


    private readLines(input: string): [number[],number[]]{
        const left: number[] = [];
        const right: number[] = [];

        const lines =  input.split("\r\n");

        lines.forEach((line) => {
            const lineItems = line.split(" ");
            left.push(Number(lineItems[0]));
            right.push(Number(lineItems[lineItems.length-1]));
        });

        return [left, right];
    }
    
}