import { isMatch } from "./reg_exp_matching";

describe("Tests", () => {
    test("test 1", () => {
        // Explanation: "a" does not match the entire string "aa".
        expect(isMatch("aa", "a")).toBe(false);
    });

    test("test 2", () => {
        // Explanation: '*' means zero or more of the preceding element, 'a'.
        // Therefore, by repeating 'a' once, it becomes "aa".
        expect(isMatch("aa", "a*")).toBe(true);
    });

    test("test 3", () => {
        // Explanation: ".*" means "zero or more (*) of any character (.)".
        expect(isMatch("ab", ".*")).toBe(true);
    });

    test("test 4", () => {
        // Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
        expect(isMatch("aab", "c*a*b")).toBe(true);
    });

    test("test 5", () => {
        // Explanation: it will only match mississppi, one i is missing
        expect(isMatch("mississippi", "mis*is*p*.")).toBe(false);
    });
});
