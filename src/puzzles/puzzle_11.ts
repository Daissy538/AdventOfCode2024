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

        let map: Map<bigint, bigint> = new Map();

        for(let i = 0; i < stones.length; i++){
            if(map.has(stones[i])){
                map.set(stones[i], map.get(stones[i])+1n);
            }else{
                map.set(stones[i], 1n);
            }
        }

        for(let sneeze = 0; sneeze < 75; sneeze++){

            const newMap = new Map<bigint, bigint>();

            for(let entry of Array.from(map)){
                const key = entry[0];
                const value = entry[1];

                const keyString = key.toString();

                if(key === 0n){
                    newMap.set(1n, newMap.has(1n)?newMap.get(1n)+value : value);
                }else if(keyString.length%2 == 0){
                    const part1 = BigInt(keyString.substring(0, keyString.length/2));
                    const part2 = BigInt(keyString.substring(keyString.length/2, keyString.length));

                    newMap.set(part1, newMap.has(part1)?newMap.get(part1)+value : value);
                    newMap.set(part2, newMap.has(part2)?newMap.get(part2)+value : value);
                }else{
                    const multi = key * 2024n;
                    newMap.set(multi, newMap.has(multi)?newMap.get(multi)+value:value);
                }
            }

            map = newMap;
        }

        let sum:bigint = 0n;
        map.forEach((value) => {
            sum = sum + value;
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