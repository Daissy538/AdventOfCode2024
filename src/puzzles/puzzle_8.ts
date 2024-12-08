import { Puzzle } from "./base/puzzleBase";

class ObjectSet extends Set{
    add(elem: object){
      return super.add(typeof elem === 'object' ? JSON.stringify(elem) : elem);
    }
    has(elem: object){
      return super.has(typeof elem === 'object' ? JSON.stringify(elem) : elem);
    }
  }

export class Puzzle8 extends Puzzle {
    protected solvePartOne(input: string): number {
        const map = this.readLines(input);

        const antinodes: ObjectSet = new ObjectSet();
        const antennas: [string, number, number][] = [];

        for(let row = 0; row < map.length; row++){
            for(let col = 0; col < map[row].length; col++){
                if(map[row][col] !== "."){
                    antennas.forEach((value) => {
                        const rowDif = row-value[1];
                        const colDif = col-value[2];

                        const isHorizontal = colDif !==0 && rowDif === 0;
                        const isVertical = colDif === 0 && rowDif !==0;
                        const isDiagnal = this.arePointsSlanted([col,row], [value[2],value[1]]);
                        const isInline = isHorizontal || isDiagnal || isVertical;

                        if(value[0] === map[row][col] && isInline){

                            const antinodes1 = [value[1]+(value[1]-row), value[2]+(value[2]-col)];
                            const antinodes2 = [row+(row-value[1]), col+(col-value[2])];

                            if(antinodes1[0] >= 0 && antinodes1[0] < map.length
                                && antinodes1[1] >= 0 && antinodes1[1] < map[0].length
                                && !antinodes.has(antinodes1)
                            ){
                                antinodes.add(antinodes1);
                            }
                          
                            if(antinodes2[0] >= 0 && antinodes2[0] < map.length
                                && antinodes2[1] >= 0 && antinodes2[1] < map[0].length
                                && !antinodes.has(antinodes2)){
                                antinodes.add(antinodes2);
                            }
                        }
                    });

                    antennas.push([map[row][col], row, col]);
                }
            }
    
        }
        return antinodes.size;
    }
    protected solvePartTwo(input: string): number {
        throw new Error("Method not implemented.");
    }

    private readLines(input: string): string[][] {
        const response: string[][] = [];
        const lines = input.split("\n");

        lines.forEach((line) => {
            const c = line.replace("\r","").split("");
            response.push(c);
        });

        return response;

    }

    private arePointsSlanted(point1: [number, number], point2: [number, number]): boolean {
        const dx = point2[0] - point1[0];
        const dy = point2[1] - point1[1];

        if (dx === 0) return false;

        const slope = dy / dx;

        return slope !== 0 && slope !== Infinity;
    }
}

