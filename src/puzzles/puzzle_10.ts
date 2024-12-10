import { Puzzle } from "./base/puzzleBase";

export class Puzzle10 extends Puzzle {
    protected solvePartOne(input: string): number {
        const map = this.readLines(input);

        //Find all trillheads
        const trailHeads: [number, number][] = [];

        for(let row = 0; row < map.length; row++){
            for(let col = 0; col < map[row].length; col++){
                if(map[row][col] === 0){
                    trailHeads.push([row, col]);
                }
            }
        }

        let sum = 0;
        trailHeads.forEach((head) => {
            sum = sum + this.checkTrailPath(head, map, []);
        })

        return sum;
    }


    protected solvePartTwo(input: string): number {
        const map = this.readLines(input);

        const trailHeads: [number, number][] = [];
        for(let row = 0; row < map.length; row++){
            for(let col = 0; col < map[row].length; col++){
                if(map[row][col] === 0){
                    trailHeads.push([row, col]);
                }
            }
        }

        let sum = 0;
        trailHeads.forEach((head) => {
            sum = sum + this.checkAmountTrails(head, map);
        })

        return sum;
    }

    private readLines(input: string): number[][] {
        const response: number[][] = [];
        const lines = input.split("\n");

        lines.forEach((line) => {
            const c = line.split("").map(Number);
            response.push(c);
        });

        return response;

    }

    private checkTrailPath(index: [number, number], map: number[][], visited: string[]): number{
        const currentHeight = map[index[0]][index[1]];

        if(currentHeight === 9){
            const location = index[0] + "-" + index[1];
            if(visited.find((v) => v === location) === undefined){
                visited.push(location);
                return 1;
            }else{
                return 0;
            }

        }

        let sum = 0;

        try{
            const left = map[index[0]][index[1]-1];
            if(left-1 === currentHeight) {
                sum = sum + this.checkTrailPath([index[0], index[1]-1], map, visited);
            }
        }catch (err){

        }

        try{
            const right = map[index[0]][index[1]+1];
            if(right-1 === currentHeight){
                sum = sum + this.checkTrailPath([index[0],index[1]+1], map, visited);
            }
        }catch (err){

        }

        try{
            const up = map[index[0]-1][index[1]];
            if(up-1 === currentHeight){
                sum = sum + this.checkTrailPath([index[0]-1,index[1]], map, visited);
            }
        }catch (err){

        }

        try{
            const down = map[index[0]+1][index[1]];
            if(down-1 === currentHeight){
                sum = sum + this.checkTrailPath([index[0]+1,index[1]], map, visited);
            }
        }catch (err){

        }


        return sum;
    }

    private checkAmountTrails(index: [number, number], map: number[][]): number{
        const currentHeight = map[index[0]][index[1]];

        if(currentHeight === 9){
            return 1;
        }

        let sum = 0;

        try{
            const left = map[index[0]][index[1]-1];
            if(left-1 === currentHeight) {
                sum = sum + this.checkAmountTrails([index[0], index[1]-1], map);
            }
        }catch (err){

        }

        try{
            const right = map[index[0]][index[1]+1];
            if(right-1 === currentHeight){
                sum = sum + this.checkAmountTrails([index[0],index[1]+1], map);
            }
        }catch (err){

        }

        try{
            const up = map[index[0]-1][index[1]];
            if(up-1 === currentHeight){
                sum = sum + this.checkAmountTrails([index[0]-1,index[1]], map);
            }
        }catch (err){

        }

        try{
            const down = map[index[0]+1][index[1]];
            if(down-1 === currentHeight){
                sum = sum + this.checkAmountTrails([index[0]+1,index[1]], map);
            }
        }catch (err){

        }


        return sum;
    }
}