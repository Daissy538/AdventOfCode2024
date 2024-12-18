import { expect, test, describe } from 'vitest'
import { Puzzle1 } from '../puzzles/puzzle_1';
import { PuzzlePart } from '../puzzles/base/puzzleBase';
import { Puzzle2 } from '../puzzles/puzzle_2';
import { Puzzle3 } from '../puzzles/puzzle_3';
import { Puzzle4 } from '../puzzles/puzzle_4';
import { Puzzle5 } from '../puzzles/puzzle_5';
import {Puzzle6} from "../puzzles/puzzle_6.ts";
import { Puzzle7 } from '../puzzles/puzzle_7.ts';
import { Puzzle8 } from '../puzzles/puzzle_8.ts';
import { Puzzle9 } from '../puzzles/puzzle_9.ts';
import {Puzzle10} from "../puzzles/puzzle_10.ts";
import {Puzzle11} from "../puzzles/puzzle_11.ts";
import {Puzzle12} from "../puzzles/puzzle_12.ts";
import {Puzzle14} from "../puzzles/puzzle_14.ts";


describe("Puzzle 1", () => {
    test("Get the total difference with test file", () => {
        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.runFromFile(__dirname + '/assets/test_1.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(11);
    })

    test("Get the total difference", () => {
        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.runFromFile(__dirname + '/../assets/input/1.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(2192892);
    })

    test("Get the the amount of occurances with the test file", () => {
        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.runFromFile(__dirname + '/assets/test_1.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(31);
    })

    test("Get the the amount of occurances", () => {
        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.runFromFile(__dirname + '/../assets/input/1.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(22962826);
    })

});

describe("Puzle 2", () => {
    test("Get the amount of safe reports of test file", () => {

        const puzzle_2 = new Puzzle2(2);

        const result = puzzle_2.runFromFile(__dirname + '/assets/test_2.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(2);

    });

    test("Get the amount of safe reports", () => {

        const puzzle_2 = new Puzzle2(2);

        const result = puzzle_2.runFromFile(__dirname + '/../assets/input/2.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(230);

    });

    test("Get the amount of safe reports of test file", () => {

        const puzzle_2 = new Puzzle2(2);

        const result = puzzle_2.runFromFile(__dirname + '/assets/test_2.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(4);

    });

    test("Get the amount of safe reports", () => {

        const puzzle_2 = new Puzzle2(2);

        const result = puzzle_2.runFromFile(__dirname + '/../assets/input/2.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(301);

    });
});

describe("Puzle 3", () => {

    test("Get the total of muls of test file", () => {

        const puzzle_3 = new Puzzle3(3);

        const result = puzzle_3.runFromFile(__dirname + '/assets/test_3.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(161);

    });

    test("Get the total of muls", () => {

        const puzzle_3 = new Puzzle3(3);

        const result = puzzle_3.runFromFile(__dirname + '/../assets/input/3.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(184511516);

    });

    test("Get the total of muls 2 of test file", () => {

        const puzzle_3 = new Puzzle3(3);

        const result = puzzle_3.runFromFile(__dirname + '/assets/test_3_B.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(48);

    });

    test("Get the total of muls 2", () => {

        const puzzle_3 = new Puzzle3(3);

        const result = puzzle_3.runFromFile(__dirname + '/../assets/input/3.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(90044227);

    });

    test("Guard Gallivant loop obstructions with test file", () => {
        const puzzle_6 = new Puzzle6(6);

        const result = puzzle_6.runFromFile(__dirname + '/assets/test_6.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(6);
    })

    test("Guard Gallivant loop obstructions", () => {
        const puzzle_6 = new Puzzle6(6);

        const result = puzzle_6.runFromFile(__dirname + '/../assets/input/6.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBeGreaterThan(6);
    })

});


describe("Puzzle 4", () => {

    test("Get the count xmas of test file simple", () => {
        const puzzle_4 = new Puzzle4(4);

        const result = puzzle_4.runFromFile(__dirname + '/assets/test_4_A.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(18);

    });

    test("Get the count xmas", () => {
        const puzzle_4 = new Puzzle4(4);

        const result = puzzle_4.runFromFile(__dirname + '/../assets/input/4.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBeGreaterThan(18);

    });

    test("Get the count mas of test file simple", () => {
        const puzzle_4 = new Puzzle4(4);

        const result = puzzle_4.runFromFile(__dirname + '/assets/test_4_B.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(9);

    });

    test("Get the count mas of test file simple", () => {
        const puzzle_4 = new Puzzle4(4);

        const result = puzzle_4.runFromFile(__dirname + '/../assets/input/4.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBeGreaterThan(9);

    });
})
describe("Puzzle 5", () => {

    test("Print Queue from test file", () => {
        const puzzle_5 = new Puzzle5(5);

        const result = puzzle_5.runFromFile(__dirname + '/assets/test_5.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(143);

    });

    test("Print Queuer", () => {
        const puzzle_5 = new Puzzle5(5);

        const result = puzzle_5.runFromFile(__dirname + '/../assets/input/5.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(7307);

    });

    
    test("Print Queue from test file", () => {
        const puzzle_5 = new Puzzle5(5);

        const result = puzzle_5.runFromFile(__dirname + '/assets/test_5.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(123);

    });

    test("Print Queuer", () => {
        const puzzle_5 = new Puzzle5(5);

        const result = puzzle_5.runFromFile(__dirname + '/../assets/input/5.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBeGreaterThan(123);

    });
})

describe("Puzzle 6", () => {

    test("Guard Gallivant with test file", () => {
        const puzzle_6 = new Puzzle6(6);

        const result = puzzle_6.runFromFile(__dirname + '/assets/test_6.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(41);
    })

    test("Guard Gallivant", () => {
        const puzzle_6 = new Puzzle6(6);

        const result = puzzle_6.runFromFile(__dirname + '/../assets/input/6.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBeGreaterThan(41);

    });

    // test("Guard Gallivant with test file", () => {
    //     const puzzle_6 = new Puzzle6(6);

    //     const result = puzzle_6.runFromFile(__dirname + '/assets/test_6.txt', PuzzlePart.TWO);

    //     expect(result.resultNumber).toBe(6);
    // })
})

describe("Puzzle 7", () => {

    test("Bridge Repair with test file", () => {
        const puzzle_7 = new Puzzle7(7);

        const result = puzzle_7.runFromFile(__dirname + '/assets/test_7.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(3749);
    })

    test("Bridge Repair", () => {
        const puzzle_7 = new Puzzle7(7);

        const result = puzzle_7.runFromFile(__dirname + '/../assets/input/7.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(2314935962622);

    });

    test("Bridge Repair with test file", () => {
        const puzzle_7 = new Puzzle7(7);

        const result = puzzle_7.runFromFile(__dirname + '/assets/test_7.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(11387);
    })

    test("Bridge Repair", () => {
        const puzzle_7 = new Puzzle7(7);

        const result = puzzle_7.runFromFile(__dirname + '/../assets/input/7.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(401477450831495);

    });
})

describe("Puzzle 8", () => {
    test("Resonant Collinearity with test file", () => {
        const puzzle_8 = new Puzzle8(8);

        const result = puzzle_8.runFromFile(__dirname + '/assets/test_8.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(14);
    })

    test("Resonant Collinearity", () => {
        const puzzle_8 = new Puzzle8(8);

        const result = puzzle_8.runFromFile(__dirname + '/../assets/input/8.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(354);
    })

    test("Resonant Collinearity with test file", () => {
        const puzzle_8 = new Puzzle8(8);

        const result = puzzle_8.runFromFile(__dirname + '/assets/test_8.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(34);
    })

    test("Resonant Collinearity", () => {
        const puzzle_8 = new Puzzle8(8);

        const result = puzzle_8.runFromFile(__dirname + '/../assets/input/8.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBeGreaterThan(34);
    })
})

describe("Puzzle 9", () => {
    test("Disk fragmeter from test file 1", () => {
        const puzzle_9 = new Puzzle9(9);

        const result = puzzle_9.runFromFile(__dirname + '/assets/test_9.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(1928);
    });

    test("Disk fragmeter 1", () => {
        const puzzle_9 = new Puzzle9(9);

        const result = puzzle_9.runFromFile(__dirname + '/../assets/input/9.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(6471961544878);
    });

    test("Disk fragmeter from test file 2", () => {
        const puzzle_9 = new Puzzle9(9);

        const result = puzzle_9.runFromFile(__dirname + '/assets/test_9.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(2858);
    });

    test("Disk fragmeter 2", () => {
        const puzzle_9 = new Puzzle9(9);

        const result = puzzle_9.runFromFile(__dirname + '/../assets/input/9.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBeGreaterThan(6471961544878);
    });
})


describe("Puzzle 10", () => {
    test("Hoof It from test file 1", () => {
        const puzzle_10 = new Puzzle10(10);

        const result = puzzle_10.runFromFile(__dirname + '/assets/test_10.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(36);
    });

    test("Hoof It from1", () => {
        const puzzle_10 = new Puzzle10(10);

        const result = puzzle_10.runFromFile(__dirname + '/../assets/input/10.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(822);

    });

    test("Hoof It from test file 2", () => {
        const puzzle_10 = new Puzzle10(10);

        const result = puzzle_10.runFromFile(__dirname + '/assets/test_10.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(81);
    });

    test("Hoof It from 2", () => {
        const puzzle_10 = new Puzzle10(10);

        const result = puzzle_10.runFromFile(__dirname + '/../assets/input/10.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(1801);

    });
})

describe("Puzzle 11", () => {
    test("Plutonian Pebbles from test file 1", () => {
        const puzzle_11 = new Puzzle11(11);

        const result = puzzle_11.runFromFile(__dirname + '/assets/test_11.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(55312);
    });

    test("Plutonian Pebbles", () => {
        const puzzle_11 = new Puzzle11(11);

        const result = puzzle_11.runFromFile(__dirname + '/../assets/input/11.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(233875);
    });

    test("Plutonian Pebbles 2", () => {
        const puzzle_11 = new Puzzle11(11);

        const result = puzzle_11.runFromFile(__dirname + '/../assets/input/11.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBeGreaterThan(65601038650482);
    });

})

describe("Puzzle 12", () => {

    test("Garden Groups from test file 1", () => {
        const puzzle_12 = new Puzzle12(12);

        const result = puzzle_12.runFromFile(__dirname + '/assets/test_12.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(772);
    });

    test("Garden Groups 1", () => {
        const puzzle_12 = new Puzzle12(12);

        const result = puzzle_12.runFromFile(__dirname + '/../assets/input/12.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(1374934);
    });

    test("Garden Groups from test file 2", () => {
        const puzzle_12 = new Puzzle12(12);

        const result = puzzle_12.runFromFile(__dirname + '/assets/test_12.txt', PuzzlePart.TWO);

        expect(result.resultNumber).toBe(436);
    });
})


describe("Puzzle 14", () => {

    test("Restroom Redoubt from test file 1", () => {
        const puzzle_14 = new Puzzle14(14, 7, 11);

        const result = puzzle_14.runFromFile(__dirname + '/assets/test_14.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBe(12);
    });

    test("Restroom Redoubt 1", () => {
        const puzzle_14 = new Puzzle14(14, 103, 101);

        const result = puzzle_14.runFromFile(__dirname + '/../assets/input/14.txt', PuzzlePart.ONE);

        expect(result.resultNumber).toBeGreaterThan(215615520);
    });

})