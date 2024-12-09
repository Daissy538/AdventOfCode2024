import { Puzzle } from "./base/puzzleBase";

export class Puzzle9 extends Puzzle {
    protected solvePartOne(input: string): number {
        const numbers = this.readLines(input);

        let blocks: string[] = this.createBlockOverview(numbers);


        for(let i = 0; i < blocks.length; i++){

            const currentPoint = blocks[i];

            if(currentPoint !== "."){
                continue;
            }

            for(let j = blocks.length-1; j > i ; j--){
                if(blocks[j] !== "."){
                    blocks[i] = blocks[j];
                    blocks[j] = "."
                    break;
                }
            }
        }

        return this.calculateSum(blocks);
    }


    protected solvePartTwo(input: string): number {
        const numbers = this.readLines(input);

        let blocks: string[] = this.createBlockOverview(numbers);

        console.log(blocks);
        let fileString = "";
        for(let i = blocks.length-1; i > 0 ; i--){
            console.log("block", blocks[i], "blocks i", blocks[i-1], "string", fileString);
            if((blocks[i]  === "." ||  blocks[i] !== blocks[i+1]) && fileString.length > 0){

                let dotString = "";

                for(let j = 0; j < blocks.length; j++){

                    if(blocks[j] !=="." && dotString.length > 0){
                        console.log("check ", "file",fileString, "dot", dotString);
                        if(dotString.length >= fileString.length){
                            for(let x = 0; x < dotString.length; x ++){
                                blocks[j-1-x] = blocks[i + x];
                                blocks[i+1+x] = "."
                            }
                        }

                        dotString = "";

                        continue;
                    }
                    else if(blocks[j] !=="."){
                        dotString = "";
                        continue;
                    }

                    dotString = dotString+blocks[j];
                }


                fileString = "";
                continue;
            }else if(blocks[i]  === "."){
                fileString = "";
                continue;
            }

            //search whole files
            fileString = fileString+blocks[i];

        }

        console.log(blocks);




        return this.calculateSum(blocks);
    }

    private readLines(input: string): number[] {
        return input.split("").map(Number);
    }

    private createBlockOverview (numbers: number[]): string[]{
        let blocks: string[] = [];
        let id = 0;

        numbers.forEach((n, index) => {
            if(index%2 !== 0){ //oneven

                for(let j = 0; j < n; j++){
                    blocks.push(".");
                }


            }else{ // even
                for(let j = 0; j < n; j++){
                    blocks.push(id.toString());
                }

                id++;
            }
        });

        return blocks;
    }

    private calculateSum(blocks: string[]): number{
        let sum = 0;
        for(let i = 0; i < blocks.length; i++){
            if(blocks[i] !== "."){
                sum = sum + (i * Number(blocks[i]));
            }
        }

        return sum;
    }
}