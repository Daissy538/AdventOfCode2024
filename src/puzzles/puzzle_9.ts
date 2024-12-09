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

        let index = blocks.length -1;
        while(index >= 0){
            if(blocks[index] !== "."){//Found file
                let fileId = blocks[index];
                let fileSize = 1;

                for(let i = index-1; blocks[i] === fileId; i--){ // get File size
                    fileSize++
                }

                for(let i = 0; i < blocks.length; i++){ // search for empty space
                    if(blocks[i] === "." && i < index){
                        let emptySpaceCount = 0;
                        for(let j = i; blocks[j] === "."; j++){//Get empyt space size
                            emptySpaceCount++;
                        }

                        if(fileSize <= emptySpaceCount){ // if file fits in empty space, then replace
                            for(let x = 0; x < fileSize; x++){
                                blocks[i+x] = fileId;
                                blocks[index-x] = ".";
                            }

                            break;
                        }
                    }
                }

                index = index - fileSize;
            }else{
                index--;
            }

        }

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