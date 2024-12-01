import { expect, test, describe } from 'vitest'
import { Puzzle1 } from '../puzzles/puzzle_1';

describe("Puzzle 1" , () => {
    test("Puzzle works", () => {
        const puzzle_1 = new Puzzle1(1);

        const result = puzzle_1.run("test");

        expect(result.resultNumber).toBe(1);
        expect(result.duriationMiliseconds).toBeGreaterThanOrEqual(0);
    });
});
