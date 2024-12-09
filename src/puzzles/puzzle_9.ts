import { Puzzle } from "./base/puzzleBase";

export class Puzzle9 extends Puzzle {
    protected solvePartOne(input: string): number {
        // const numbers = this.readLines(input);

        let blocks: string[] = [];
        let id = 0;

        //Create blocks
        // numbers.forEach((n, index) => {
        //     if(index%2 !== 0){ //oneven

        //         for(let j = 0; j < n; j++){
        //           blocks.push(".");
        //         }


        //     }else{ // even
        //         for(let j = 0; j < n; j++){
        //             blocks.push(id.toString());
        //         }

        //         id++;
        //     }
        // });

        console.log(blocks);

        // for(let i = 0; i < blocks.length; i++){

        //     const currentPoint = blocks[i];

        //     if(currentPoint !== "."){
        //         continue;
        //     }

        //     for(let j = blocks.length-1; j > i ; j--){
        //         if(blocks[j] !== "."){
        //             blocks[i] = blocks[j];
        //             blocks[j] = "."
        //             break;
        //         }
        //     }

    
        // }

        let sum = 0;
        // for(let i = 0; blocks[i] !== "."; i++){
        //    sum = sum + (i * Number(blocks[i]));
        // }

        return sum;
    }


    protected solvePartTwo(input: string): number {
        throw new Error("Method not implemented.");
    }

    private readLines(input: string): number[] {
        return input.split("").map(Number);
    }

}