import {Puzzle} from "./base/puzzleBase.ts";

export class Puzzle14 extends Puzzle {

    height = 7;
    width = 11;

    constructor(num: number, height: number, width: number) {
        super(num);

        this.height = height;
        this.width = width;
    }

    protected solvePartOne(input: string): number {
        const robots = this.readLines(input);

        const grid: number[][] = [];

        for(let counter = -1; counter < 100; counter++){

            if(counter !== -1){
                robots.forEach((robot) => {
                    let x = robot[0][0] + robot[1][0];
                    let y = robot[0][1] + robot[1][1];

                    if(x > grid[0].length - 1){
                        let newX = robot[0][0];
                        for(let i = 0; i < robot[1][0]; i++){
                            if(newX == grid[0].length - 1){
                                newX = 0;
                            }else{
                                newX = newX + 1;
                            }
                        }

                        x = newX;
                    }else if(x < 0){
                        let newX = robot[0][0];
                        for(let i = 0; i > robot[1][0]; i--){
                            if(newX === 0){
                                newX = this.width - 1;
                            }else{
                                newX = newX - 1;
                            }
                        }

                        x = newX;
                    }

                    if(y > grid.length -1){
                        let newY = robot[0][1];
                        for(let i = 0; i < robot[1][1]; i++){
                            if(newY == grid.length - 1){
                                newY = 0;
                            }else{
                                newY = newY + 1;
                            }
                        }

                        y = newY;
                    }else if(y < 0){
                        let newY = robot[0][1];
                        for(let i = 0; i > robot[1][1]; i--){
                            if(newY === 0){
                                newY = this.height - 1;
                            }else{
                                newY = newY - 1;
                            }
                        }

                        y = newY;
                    }

                    robot[0][0] = x;
                    robot[0][1] = y;
                });
            }

            for(let row = 0; row < this.height; row++){ //Update map
                if(!grid[row]){
                    grid[row] = [];
                }

                for(let col = 0; col < this.width; col++){
                    const robot = robots.filter(r => r[0][0] === col && r[0][1] === row);

                    if(robot.length > 0){
                        grid[row][col] = robot.length;
                    }else{
                        grid[row][col] = 0;
                    }
                }
            }

        }

        //calculate
        console.log("Grid:" );
        grid.forEach((g) => {
            console.log(g.map((i) => i === 0? ".": i).join("").toString());
        });

        const parts = [];
        const topPart = grid.slice(0, (this.height-1)/2);

        parts.push(topPart.map((g) =>  g.slice(0, ((this.width-1)/2))));
        parts.push(topPart.map((g) =>  g.slice((this.width-1)/2+1, this.width)));

        // console.log((this.width-1)/2, (this.width-1)/2+1, this.width);
        // console.log((this.height-1)/2, (this.height-1)/2+1, this.height);

        const bottomPart = grid.slice((this.height-1)/2+1, this.height);
        parts.push(bottomPart.map((g) =>  g.slice(0, ((this.width-1)/2))));
        parts.push(bottomPart.map((g) =>  g.slice((this.width-1)/2+1, this.width)));

        let sum = 1;
        parts.forEach((p) => {
            //
            // console.log("part:");
            // p.forEach((g) => {
            //     console.log(g.map((i) => i === 0? ".": i).join("").toString());
            // });

            const result = this.sumAllRobots(p);
            sum = sum * result;
        })

        return sum;
    }

    protected solvePartTwo(input: string): bigint {
        return 0n;
    }

    private readLines(input: string): [number[], number[]][] {
        const response: [number[], number[]][] = [];
        const lines = input.split("\n");

        lines.forEach((line) => {
            const c = line.split(" ")

            if(!c.some((i) => i === "")){
                const position = c[0].substring(2, c[0].length).split(",").map(Number);
                const velocity = c[1].substring(2, c[1].length).split(",").map(Number);

                response.push([position, velocity]);
            }

        });

        return response;

    }

    private sumAllRobots(part: number[][]){
        let sum = 0;
        part.forEach((l) => {
            const result = l.reduce((a,b) =>{ return a+b});
            sum = sum + result;
        })

        return sum;
    }

}