import {Puzzle} from "./base/puzzleBase.ts";

export class Puzzle6 extends Puzzle {
    protected solvePartOne(input: string): number {
        const map = this.readLines(input);

        let guardCoordinates = this.findGuardCoordinates(map);
        const visitedItems: Set<string> = new Set<string>();
        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);

        let direction = map[guardCoordinates[0]][guardCoordinates[1]];

        let walking = true
        while(walking){

            switch (direction){
                case "^":
                    if(guardCoordinates[0]-1 === -1){
                        walking = false;
                        break;
                    }
                    const up = map[guardCoordinates[0]-1][guardCoordinates[1]];
                    if(up === "#"){
                        direction = ">";
                    }
                    else{
                        guardCoordinates = [guardCoordinates[0]-1,guardCoordinates[1]];
                        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);
                    }
                    break;
                case ">":
                    if(guardCoordinates[1]+1 === map[guardCoordinates[0]].length){
                        walking = false;
                        break;
                    }
                    const right = map[guardCoordinates[0]][guardCoordinates[1]+1];

                    if(right === "#"){
                        direction = "v";
                    }
                    else{
                        guardCoordinates = [guardCoordinates[0],guardCoordinates[1]+1];
                        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);
                    }
                    break;
                case "<":
                    if(guardCoordinates[1]-1 === -1){
                        walking = false;
                        break;
                    }
                    const left = map[guardCoordinates[0]][guardCoordinates[1]-1];

                    if(left === "#"){
                        direction = "^";
                    }
                    else{
                        guardCoordinates = [guardCoordinates[0],guardCoordinates[1]-1];
                        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);
                    }
                    break;
                case "v":
                    if(guardCoordinates[0]+1 === map.length){
                        walking = false;
                        break;
                    }

                    const down = map[guardCoordinates[0]+1][guardCoordinates[1]];
                    if(down === "#"){
                        direction = "<";
                    }
                    else{
                        guardCoordinates = [guardCoordinates[0]+1,guardCoordinates[1]];

                        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);
                    }
                    break;
            }
        }

        return visitedItems.size;
    }

    protected solvePartTwo(input: string): number {
        let guardCoordinates = this.findGuardCoordinates(map);
        const visitedItems: Set<string> = new Set<string>();
        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);

        let direction = map[guardCoordinates[0]][guardCoordinates[1]];

        let walking = true
        while(walking){

            switch (direction){
                case "^":
                    if(guardCoordinates[0]-1 === -1){
                        walking = false;
                        break;
                    }
                    const up = map[guardCoordinates[0]-1][guardCoordinates[1]];
                    if(up === "#"){
                        direction = ">";
                    }
                    else{
                        guardCoordinates = [guardCoordinates[0]-1,guardCoordinates[1]];
                        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);
                    }
                    break;
                case ">":
                    if(guardCoordinates[1]+1 === map[guardCoordinates[0]].length){
                        walking = false;
                        break;
                    }
                    const right = map[guardCoordinates[0]][guardCoordinates[1]+1];

                    if(right === "#"){
                        direction = "v";
                    }
                    else{
                        guardCoordinates = [guardCoordinates[0],guardCoordinates[1]+1];
                        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);
                    }
                    break;
                case "<":
                    if(guardCoordinates[1]-1 === -1){
                        walking = false;
                        break;
                    }
                    const left = map[guardCoordinates[0]][guardCoordinates[1]-1];

                    if(left === "#"){
                        direction = "^";
                    }
                    else{
                        guardCoordinates = [guardCoordinates[0],guardCoordinates[1]-1];
                        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);
                    }
                    break;
                case "v":
                    if(guardCoordinates[0]+1 === map.length){
                        walking = false;
                        break;
                    }

                    const down = map[guardCoordinates[0]+1][guardCoordinates[1]];
                    if(down === "#"){
                        direction = "<";
                    }
                    else{
                        guardCoordinates = [guardCoordinates[0]+1,guardCoordinates[1]];

                        visitedItems.add(guardCoordinates[0]+"+"+guardCoordinates[1]);
                    }
                    break;
            }
        }
    }

    private findGuardCoordinates(map: string[][]): [number, number]{
        let response: [number, number] = [0,0];

        for(let row = 0; row < map.length; row++){
            for(let col = 0; col < map[row].length; col++){
                if(map[row][col] === "^" || map[row][col] === "v" || map[row][col] === ">" || map[row][col] === "<"){
                    response = [row, col];
                    return response;
                }
            }
        }

        throw new Error("No guard found");
    }

    private readLines(input: string): string[][] {
        const response: string[][] = [];
        const lines = input.split("\n");

        lines.forEach((line) => {
            const c = line.split("");
            response.push(c);
        });

        return response;

    }

}