import { searchInsert } from "./search_insert_position";

describe("Tests", () => {
    test("test 1", () => {
        expect(searchInsert([1,3,5,6], 5)).toBe(2);
    });

    test("test 2", () => {
        expect(searchInsert([1,3,5,6], 2)).toBe(1);
    });

    test("test 3", () => {
        expect(searchInsert([1,3,5,6], 7)).toBe(4);
    });

    test("test 4", () => {
        expect(searchInsert([1,3,5,6], 0)).toBe(0);
    });

    test("test 5", () => {
        expect(searchInsert([1], 0)).toBe(0);
    });

    test("test 6", () => {
        expect(searchInsert([3,4,5,6,7,8], 6)).toBe(3);
    });
});
