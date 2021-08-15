// https://leetcode.com/problems/regular-expression-matching/
export function isMatch(s: string, p: string): boolean {
    let lastSCharPosition = -1;
    let lastSChar: string;
    const getSChar = () => {
        if (++lastSCharPosition >= s.length) return undefined;
        lastSChar = s[lastSCharPosition];
        return lastSChar;
    };
    const getToLastDifferentSChar = () => {
        const prevChar = lastSChar;
        console.log("prevChar", prevChar)
        let nextChar: string;
        do {
            nextChar = getSChar();
        } while (prevChar === nextChar);
        lastSCharPosition--;
        lastSChar = s[lastSCharPosition];
        console.log("lastSChar", lastSChar);
    };
    const getToSChar = (c: string): boolean => {
        console.log(911, c);
        let prevChar = lastSChar;
        let nextChar = lastSChar;
        do {
            if (prevChar !== nextChar) return false;
            nextChar = getSChar();
        } while (((c==="." && prevChar === nextChar) && nextChar !== c) || !nextChar);
        lastSChar = s[--lastSCharPosition];
        return true;
    };

    let lastPCharPosition = -1;
    let lastPChar: string;
    const getPChar = () => {
        if (++lastPCharPosition >= p.length) return undefined;
        lastPChar = p[lastPCharPosition];
        return lastPChar;
    };

    do {
        const pChar = getPChar();
        console.log(101, lastPCharPosition, pChar);
        if (!pChar) {
            const sChar = getSChar();
            console.log(102, lastSCharPosition, sChar);
            return !sChar;
        }
        const nextPChar = p[lastPCharPosition + 1];
        const nextNextPChar = p[lastPCharPosition + 2];
        if (nextPChar === "*") {
            console.log("pChar", lastPCharPosition, lastPChar);
            getSChar();
            console.log("sChar", lastSCharPosition, lastSChar);
            if (nextNextPChar) {
                console.log("nextNextPChar", nextNextPChar);
                const res = getToSChar(nextNextPChar);
                console.log("res", res);
                if (!res) return false;
                console.log("sChar2", lastSCharPosition, lastSChar);
            } else if (pChar === ".") {
                return true;
            } else {
                getToLastDifferentSChar();
            }
            getPChar();
        } else if (pChar === ".") {
            console.log(111);
            const sChar = getSChar();
            // TODO ".*" case
            if (!sChar) return false;
        } else {
            console.log(112);
            const sChar = getSChar();
            console.log("sChar", lastSCharPosition, sChar);
            if (!sChar || sChar !== pChar) return false;
        }
    } while (lastPCharPosition < p.length);

    return true;
}
