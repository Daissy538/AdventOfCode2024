import { Puzzle } from "./base/puzzleBase";

export class Puzzle5 extends Puzzle {
    protected solvePartOne(input: string): number {
        const orders = this.getOrderMap(input);
        const updates = this.getTheUpdates(input);

        const correctUpdates: number[][] = []
        updates.forEach((update) => {

            //sort list in correct order
            const sortedList = this.sortUpdate([...update], orders);

            //compare list if it is still same
            const isCorrectOrder = JSON.stringify(sortedList) === JSON.stringify(update);

            //when correct order
            if(isCorrectOrder){
              correctUpdates.push(update);
            }
        });


        const sum =correctUpdates.map((value) =>  { 
            return value[Math.floor(value.length/2)];
        })
        .reduce((preV, curV) => preV + curV);
        return sum;
    }

    protected solvePartTwo(input: string): number {
        const orders = this.getOrderMap(input);
        const updates = this.getTheUpdates(input);

        const inCorrectUpdates: number[][] = []
        updates.forEach((update) => {

            //sort list in correct order
            const sortedList = this.sortUpdate([...update], orders);

            //compare list if it is still same
            const isCorrectOrder = JSON.stringify(sortedList) === JSON.stringify(update);

            //when correct order
            if(!isCorrectOrder){
              inCorrectUpdates.push(sortedList);
            }
        });

        const sum =inCorrectUpdates.map((value) =>  { 
            return value[Math.floor(value.length/2)];
        })
        .reduce((preV, curV) => preV + curV);

        return sum;
    }

    sortUpdate(update: number[], orders: number[][]){
        update.sort((a,b) => {
            
            //search all occuriences of A
            //link further until you find b.
            //Keep track if you link to the left or to the right
            const listOfIndexes: number[] = [];
            
            orders.forEach((order, index) => {
                if(order.find((value) => value === b)){
                    listOfIndexes.push(index);
                }
            });

            let order = 0;
            listOfIndexes.forEach((index) => {
                let currentValue = orders[index];
                let currentLocation: number = index;

                if(currentValue[0] === b){
                    let searching = true;
                    while(searching){
                        const rightSide = orders[currentLocation][1];

                        if(rightSide === a){
                            searching = false;
                            order = 1;
                            return;
                        }else{
                           const newLocation = orders.findIndex((value) => {value[0] === rightSide});

                           if(newLocation !== -1){
                            currentLocation = newLocation;
                            currentValue = orders[currentLocation];
                           }else{
                            searching = false;
                            return;
                           }
                        }
                    }
                }

                if(currentValue[1] === b){
                    let searching = true;
                    while(searching){
                        const leftSide = orders[currentLocation][0];

                        if(leftSide === a){
                            searching = false;
                            order = -1;
                            return;
                        }else{
                            const newLocation = orders.findIndex((value) => {value[1] === leftSide});

                            if(newLocation !== -1){
                                currentLocation = newLocation;
                                currentValue = orders[currentLocation];
                            }else{
                                searching = false;
                                return;                             
                            }
                        }
                    }
                }
            });

            return order;
        });

        return update;
    }

    getOrderMap(input: string): number[][] {
        let response: number[][] = [];

        const lines = input.split("\n");

        lines.forEach((line) => {
            if(line.match(/[0,9]*|[0,9]*/)){
                const c = line.split("|");

                if(!c[0] || !c[1]){
                    return;
                }
                const leftSide: number = Number(c[0]);
                const rightSide: number = Number(c[1]);

                response.push( [leftSide,rightSide] )
            }
        });

        return response;
    }

    getTheUpdates(input: string): number[][]{
        let response: number[][] = [];

        const lines = input.split("\r\n");
        
        lines.forEach((line) => {
            if(line.indexOf(",") === -1){
                return;
            }

            const numbers = line.split(",");

            response.push(numbers.filter(f => f != undefined).map(Number))
        });
        return response;
    }
}