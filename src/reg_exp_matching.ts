// https://leetcode.com/problems/regular-expression-matching/

export function isMatch(s: string, p: string): boolean {
    const allSameChars = (s$: string, char$: string): boolean => {
        if (s$.length === 0) return true;
        if (char$ === ".") return true;
        for (let i = 0; i < s$.length; i++) {
            if (s$[i] !== char$) return false;
        }
        return true;
    };

    const getValidSubstrings = (s$: string, char$: string): string[] => {
        const res: string[] = [];
        if (s$.length === 0) return [""];
        if (char$ === ".") {
            for (let i = 0; i <= s$.length; i++) {
                res.push(s$.substr(i));
            }
        } else {
            for (let i = 0; i <= s$.length; i++) {
                res.push(s$.substr(i));
                if (s$[i] !== char$) break;
            }
        }
        return res;
    };

    const pChar = p[0];
    if (pChar === "*") throw Error("incorrect pChar");
    const nextPChar = p[1];

    if (nextPChar === "*") {
        if (p.length > 2) {
            const subStrings = getValidSubstrings(s, pChar);
            for (let i = 0; i < subStrings.length; i++) {
                const str = subStrings[i];
                if (isMatch(str, p.substr(2))) {
                    return true;
                }
            }
            return false;
        } else if (p.length === 2) {
            return allSameChars(s, pChar);
        } else {
            throw Error(`weird bug p.length < 2, ${p.length}`);
        }
    } else {
        // ordinary chars
        if (p.length > 1) {
            if (p[0] === s[0] || (p[0] === "." && s.length >= 1)) {
                return isMatch(s.substr(1), p.substr(1));
            } else {
                return false;
            }
        } else if (p.length === 1) {
            if (s.length !== 1) {
                return false;
            } else {
                return p[0] === "." || p[0] === s[0];
            }
        } else {
            throw Error(`weird bug p.length < 1, ${p.length}`);
        }
    }
}
