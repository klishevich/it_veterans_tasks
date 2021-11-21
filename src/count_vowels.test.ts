import { countVowelSubstrings, getVowelSubstrings, StringInfo } from "./count_vowels";

describe("Test getVowelSubstrings", () => {
    test("test 1", () => {
        expect(getVowelSubstrings("aeiouu")).toEqual([new StringInfo("aeiouu")]);
    });

    test("test 2", () => {
        expect(getVowelSubstrings("unicornarihan")).toEqual([]);
    });

    test("test 3", () => {
        expect(getVowelSubstrings("cuaieuouac")).toEqual([new StringInfo("uaieuoua")]);
    });

    test("test 4", () => {
        expect(getVowelSubstrings("bbaeixoubb")).toEqual([]);
    });

    test("leetcode test 5", () => {
        expect(getVowelSubstrings("duuebuaeeeeeeuaoeiueaoui")).toEqual([new StringInfo("uaeeeeeeuaoeiueaoui")]);
    });
});

describe("Tests", () => {
    test("test 1", () => {
        expect(countVowelSubstrings("aeiouu")).toBe(2);
    });

    test("test 2", () => {
        expect(countVowelSubstrings("unicornarihan")).toBe(0);
    });

    test("test 3", () => {
        expect(countVowelSubstrings("cuaieuouac")).toBe(7);
    });

    test("test 4", () => {
        expect(countVowelSubstrings("bbaeixoubb")).toBe(0);
    });

    test("leetcode test 5", () => {
        expect(countVowelSubstrings("duuebuaeeeeeeuaoeiueaoui")).toBe(81);
    });

    test("leetcode test 5.1", () => {
        expect(countVowelSubstrings("uaeeeeeeuaoeiueaoui")).toBe(81);
    });
});
