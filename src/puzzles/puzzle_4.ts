import { Puzzle } from "./base/puzzleBase";

export class Puzzle4 extends Puzzle {
    protected solvePartOne(input: string): number {
        let board = this.readLines(input);

        let count = 0;
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] === "X"){
                    count = count + this.searchForString("XMAS", board, i, j);
                }
            }
        }

        return count;
    }

    protected solvePartTwo(input: string): number {

        let board = this.readLines(input);
        console.log(input);
        console.log(board);

        let count = 0;
        for(let i = 1; i < board.length-1; i++){
            for(let j = 1; j < board[i].length-1; j++){
                console.log(board[i][j] );
                if(board[i][j] === "A"){
                    const hasMas = this.searchForMas(board, i, j);
                    console.log("HALLO", hasMas);
                    if(hasMas){
                        count++;
                    }
                }
            }
        }

        return count;
    }

    readLines(input: string): string[][] {
        const response: string[][] = [];
        const lines = input.split("\n");

        lines.forEach((line) => {
            const c = line.split("");
            response.push(c);
        });

        return response;

    }

    searchForString(text: string, board: string[][], row: number, col: number){
        const foundItems = new Map<string, string>();
        for(let rowI = 0, colI = 0; rowI < text.length, colI < text.length; rowI++, colI++){

            //Diagnal
            //Down + Right
            if(row+rowI < board.length && col+colI < board[0].length){
                const BRValue = board[row+rowI][col+colI];
                foundItems.set("BRValue", foundItems.has("BRValue")? foundItems.get("BRValue")+BRValue: BRValue);
            }

            //Up+Left
            if(row-rowI >= 0 && col-colI >= 0){
                const TLValue = board[row-rowI][col-colI];
                foundItems.set("TLValue", foundItems.has("TLValue")? foundItems.get("TLValue")+TLValue: TLValue);
            }

            //Up+Right
            if(row-rowI >= 0 && col+colI < board[0].length){
                const TRValue = board[row-rowI][col+colI];
                foundItems.set("TRValue", foundItems.has("TRValue")? foundItems.get("TRValue")+TRValue: TRValue);
            }

            //Down+Left
            if(row+rowI < board.length && col-colI >= 0){
                const BLValue = board[row+rowI][col-colI];
                foundItems.set("BLValue", foundItems.has("BLValue")? foundItems.get("BLValue")+BLValue: BLValue);
            }

            //Horizontal
            //Right
            if(col+colI < board[0].length){
                const RValue = board[row][col+colI];
                foundItems.set("RValue", foundItems.has("RValue")? foundItems.get("RValue")+RValue: RValue);
            }

            //Left
            if(col-colI >= 0){
                const LValue = board[row][col-colI];
                foundItems.set("LValue", foundItems.has("LValue")? foundItems.get("LValue")+LValue: LValue);
            }

            //Vertical
            //Down
            if(row+rowI < board.length){
                const BValue = board[row+rowI][col];
                foundItems.set("BValue", foundItems.has("BValue")? foundItems.get("BValue")+BValue: BValue);
            }

            //Up
            if(row-rowI >= 0 ){
                const TValue = board[row-rowI][col];
                foundItems.set("TValue", foundItems.has("TValue")? foundItems.get("TValue")+TValue: TValue);
            }

        }

        let count = 0;
        foundItems.forEach((value, key) => {
            if(value === text){
                count++;
            }
        });

        return count;

    }

    searchForMas( board: string[][], row: number, col: number){

        const topLeft =  board[row-1][col-1];
        const topRigth = board[row-1][col+1];
        const bottomRigth = board[row+1][col+1];
        const bottomLeft = board[row+1][col-1];

        const hasBackText =  (topLeft === "M" && bottomRigth === "S")
    || (topLeft === "S" && bottomRigth === "M");

        const hasForText = (topRigth == "M" && bottomLeft ==="S")
    || (topRigth === "S" && bottomLeft === "M")

        console.log(topLeft, bottomRigth, hasBackText);
        console.log()
        return hasBackText && hasForText
    }

}