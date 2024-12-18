import { Puzzle } from "./base/puzzleBase";

export class Node {
    value: string;
    visited: boolean;
    edgesCount: number = 0;
    x: number = 0;
    y: number = 0;

    EndUp: boolean;
    EndDown: boolean;
    EndLeft: boolean;
    EndRigth: boolean;

    constructor(value: string, visited: boolean, x:number, y:number) {
        this.value = value;
        this.visited = visited;
        this.x = x;
        this.y = y;
    }

    public equals(node: Node){
        return this.x == node.x && this.y == node.y;
    }

    public containValue(value: string){
        return this.value === value;
    }

}

export class Puzzle12 extends Puzzle {
    protected solvePartOne(input: string): number {
        const plod = this.readLines(input);

        let sum = 0;
        for(let row = 0; row < plod.length; row++){
            for(let col = 0; col < plod[row].length; col++){
                if(!plod[row][col].visited){
                    const visited = this.searchFlowerBad(plod, plod[row][col]);

                    let edge = 0;
                    visited.forEach((a) => {edge = edge + a.edgesCount});


                    sum = sum + (visited.length * edge);
                }
            }
        }

        return sum;
    }

    protected solvePartTwo(input: string): bigint {
        const plod = this.readLines(input);

        let sum = 0;
        for(let row = 0; row < plod.length; row++){
            for(let col = 0; col < plod[row].length; col++){
                if(!plod[row][col].visited){
                    const visited = this.searchFlowerBad(plod, plod[row][col]);
                    const edges = this.countFlowerEdgeBad(plod, plod[row][col]);

                    console.log(visited.length, edges);
                    sum = sum + (visited.length * edges);
                }
            }
        }

        return BigInt(sum);
    }

    private searchFlowerBad(plod: Node[][], start: Node): Node[]{

        const visited: Node[] = [];
        const queue: Node[] = [start];
        const value = start.value;
        while (queue.length > 0){

            const item =  queue.pop();
            if (!item){
                continue;
            }

            if(item.containValue(value)){
                if(item.x+1 < plod[item.y].length && plod[item.y][item.x+1].containValue(item.value)){
                    const rightNode= plod[item.y][item.x+1];
                    queue.push(rightNode);
                }else{
                    item.EndRigth = true;
                    item.edgesCount++;
                }

                if(item.y+1 < plod.length && plod[item.y+1][item.x].containValue(item.value)){
                    const downNode = plod[item.y+1][item.x];
                    queue.push(downNode);
                }else{
                    item.EndDown = true;
                    item.edgesCount++;
                }

                if(item.x - 1 >= 0 && plod[item.y][item.x-1].containValue(item.value)){
                    const leftNode= plod[item.y][item.x-1];
                    queue.push(leftNode);
                }else{
                    item.EndLeft = true;
                    item.edgesCount++;
                }

                if(item.y-1 >= 0 && plod[item.y-1][item.x].containValue(item.value)){
                    const upNode = plod[item.y-1][item.x];
                    queue.push(upNode);
                }else{
                    item.EndUp = true;
                    item.edgesCount++;
                }

                item.visited = true;
                visited.push(item);
            }
        }

        return visited;
    }

    private countFlowerEdgeBad(plod: Node[][], start: Node){

        //Zoek all hoeken.
        //Op basis van hoeken
        let amountCorners = 0;
        let direction:">"|"V"|"^"|"<" ;

        if(start.EndUp){
            direction = ">";
        }else if(start.EndDown){
            direction = "<";
        }else if(start.EndLeft){
            direction = "^";
        }else{
            direction = "V";
        }

        const queue: Node[] = [start];
        let index = 0;
        while (queue.length > 0){
            const item = queue.pop();
            if (!item){
                continue;
            }
            if(item === start && index > 0){
                continue;
            }

            index++;

            //Turn or move
            switch (direction){
                case "^":
                    if(item.y-1 >= 0 && plod[item.y-1][item.x].containValue(item.value)){
                        const upNode = plod[item.y-1][item.x];
                        queue.push(upNode);
                    }else{
                        direction = ">";
                        amountCorners++;
                        queue.push(item);
                    }
                    break;
                case "<":
                    if(item.x - 1 >= 0 && plod[item.y][item.x-1].containValue(item.value)){
                        const leftNode= plod[item.y][item.x-1];
                        queue.push(leftNode);
                    }else{
                        direction = "^";
                        amountCorners++;
                        queue.push(item);
                    }
                    break;
                case ">":
                    if(item.x+1 < plod[item.y].length && plod[item.y][item.x+1].containValue(item.value)){
                        const rightNode= plod[item.y][item.x+1];
                        queue.push(rightNode);
                    }else{
                        direction = "V";
                        amountCorners++;
                        queue.push(item);
                    }
                    break;
                case "V":
                    if(item.y+1 < plod.length && plod[item.y+1][item.x].containValue(item.value)){
                        const downNode = plod[item.y+1][item.x];
                        queue.push(downNode);
                    }else{
                        direction = "<";
                        amountCorners++;
                        queue.push(item);
                    }
                    break;
            }
        }

        return amountCorners;
    }

    private readLines(input: string): Node[][] {
        const response: Node[][] = [];
        const lines = input.split("\n");

        lines.forEach((line, row) => {
            const items = line.split("").map((i, col) => {
                return new Node(i, false, col, row);
            });
            response.push(items);
        });

        return response;
    }

}