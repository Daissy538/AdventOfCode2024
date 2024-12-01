import { expect, test, describe } from 'vitest'
import { Puzzle1 } from '../puzzles/puzzle_1';
import fs from 'fs'
import { PuzzleType } from '../puzzles/base/puzzleBase';


describe("Puzzle 1", () => {
    test("Get the total difference with test file", () => {
        const buffer = fs.readFileSync(__dirname + '/assets/test_1.txt', { encoding: "utf8" });

        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.run(buffer, PuzzleType.A);

        expect(result.resultNumber).toBe(11);
    })

    test("Get the total difference", () => {
        const buffer = fs.readFileSync(__dirname + '/../assets/input/1.txt', { encoding: "utf8" });

        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.run(buffer, PuzzleType.A);

        expect(result.resultNumber).toBe(2192892);
    })

    test("Get the the amount of occurances with the test file", () => {
        const buffer = fs.readFileSync(__dirname + '/assets/test_1.txt', { encoding: "utf8" });

        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.run(buffer, PuzzleType.B);

        expect(result.resultNumber).toBe(31);
    })

    test("Get the the amount of occurances", () => {
        const buffer = fs.readFileSync(__dirname + '/../assets/input/1.txt', { encoding: "utf8" });

        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.run(buffer, PuzzleType.B);

        expect(result.resultNumber).toBe(22962826);
    })

});
