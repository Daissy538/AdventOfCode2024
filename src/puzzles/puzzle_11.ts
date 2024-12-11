import { Puzzle } from "./base/puzzleBase";

export class Puzzle11 extends Puzzle {
    protected solvePartOne(input: string): number {
        const stones = this.readLines(input);

        let sum = 0;
        stones.forEach((stone) => {
            sum = sum + this.sneezeStone(stone, 25);
        });

        return sum;
    }

    protected solvePartTwo(input: string): bigint {
        const stones = this.readLinesNumber(input);

        const map: Map<bigint, bigint> = new Map();

        let queue: bigint[] = stones;
        for (let index =0; index < 75; index++ ){

            const newQueue: bigint[] = [];
            queue.forEach((item) => {
                if(map.has(item)){
                    map.set(item, map.get(item)+BigInt(1));
                }else{
                    map.set(item, BigInt(1));
                }

                if(item === BigInt(0)){
                    newQueue.push(BigInt(1));
                }else if(item.toString().length%2 == 0){
                    const part1 = BigInt(item.toString().substring(0, item.toString().length/2));
                    const part2 = BigInt(item.toString().substring((item.toString().length/2), item.toString().length));

                    newQueue.push(part1)
                    newQueue.push(part2)
                }else{
                    newQueue.push(item*BigInt(2024));
                }

            })

            queue = newQueue;
        }

        let sum:bigint = BigInt(0);
        map.forEach((value) => {
            sum = sum + BigInt(value);
        })

        return sum;
    }

    private readLines(input: string): string[] {
        return input.split(" ");
    }

    private readLinesNumber(input: string): bigint[] {
        return input.split(" ").map(BigInt);
    }

    private sneezeStone(stone: string, sneezeRound: number): number{
        if(sneezeRound == 0){
            return 1;
        }

        let sum = 0;

        if(stone === "0"){
            sum = sum + this.sneezeStone("1", sneezeRound-1);
        }else if(stone.length%2 == 0){
            const part1 = this.checkFor0(stone.substring(0, stone.length/2));
            const part2 = this.checkFor0(stone.substring((stone.length/2), stone.length));

            sum = sum + this.sneezeStone(part1, sneezeRound-1);
            sum = sum + this.sneezeStone(part2, sneezeRound-1);
        }else{
            sum = sum + this.sneezeStone((Number(stone) * 2024).toString(), sneezeRound-1);
        }

        return sum
    }

    private checkFor0 (stone: string): string {
        if(stone.startsWith("0")){
            stone = Number(stone).toString();
        }
        return stone;
    }
}