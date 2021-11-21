import { countVowels, getVowelSubstrings, StringInfo } from "./count_vowels";

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
});

describe("Tests", () => {
    test("test 1", () => {
        expect(countVowels("aeiouu")).toBe(2);
    });

    test("test 2", () => {
        expect(countVowels("unicornarihan")).toBe(0);
    });

    test("test 3", () => {
        expect(countVowels("cuaieuouac")).toBe(7);
    });

    test("test 4", () => {
        expect(countVowels("bbaeixoubb")).toBe(0);
    });
});
