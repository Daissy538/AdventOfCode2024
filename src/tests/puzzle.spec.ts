import { expect, test, describe } from 'vitest'
import { Puzzle1 } from '../puzzles/puzzle_1';
import { PuzzlePart } from '../puzzles/base/puzzleBase';
import { Puzzle2 } from '../puzzles/puzzle_2';
import { Puzzle3 } from '../puzzles/puzzle_3';


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


});